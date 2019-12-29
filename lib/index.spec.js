const xApi = require ('./index');

describe('public api', () => {
    it('should allow to define a statement', () => {
        const alice = xApi.cmi5.actor(xApi.IFI.account({name: 'Alice', homePage: 'http://alice.me'}));
        const registered = xApi.cmi5.registered();
        const awesomeCourse = xApi.cmi5.activity('http://www.awsome-courses.com/course-id')
            .name({value: 'The Awesome course'});

        const statement = xApi.cmi5.buildNewStatement()
            .actor(alice)
            .verb(registered)
            .object(awesomeCourse)
            .when(new Date('2020-01-01'));

        const expectedStatement = '{"actor":{"objectType":"Agent","account":{"name":"Alice","homePage":"http://alice.me"}},"authority":null,"timestamp":"2020-01-01T00:00:00.000Z","version":"1.0.0","verb":{"id":"http://adlnet.gov/expapi/verbs/registered"},"object":{"objectType":"Activity","definition":{"name":{"en-US":"The Awesome course"},"type":"http://adlnet.gov/expapi/activities/cmi.interaction"},"id":"http://www.awsome-courses.com/course-id"}}';

        expect(JSON.stringify(statement.getStatement())).toBe(expectedStatement);
    })
});