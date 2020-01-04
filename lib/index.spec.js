const xApi = require ('./index');

describe('public api', () => {
    const authority = xApi.IFI.account({
        name: 'authority-username',
        homePage: 'http://www.example.com/learning-record-provider'
    });
    const alice = xApi.cmi5.actor(xApi.IFI.account({name: 'Alice', homePage: 'http://alice.me'}));

    test('A registered statement example', () => {
        const statement = xApi.cmi5.registered()
            .activityId('http://www.awsome-courses.com/course-id')
            .activityName({value: 'The Awesome course'})
            .actor(alice)
            .authority({name: 'Learning Record Provider', IFI: authority})
            .when(new Date('2020-01-01'));

        const expectedStatement = '{"version":"1.0.3","object":{"objectType":"Activity","type":"http://adlnet.gov/expapi/activities/cmi.interaction","id":"http://www.awsome-courses.com/course-id","definition":{"name":{"en-US":"The Awesome course"}}},"verb":{"id":"http://adlnet.gov/expapi/verbs/registered","display":{"en-US":"registered"}},"actor":{"objectType":"Agent","account":{"name":"Alice","homePage":"http://alice.me"}},"authority":{"objectType":"Agent","account":{"name":"authority-username","homePage":"http://www.example.com/learning-record-provider"},"name":"Learning Record Provider"},"timestamp":"2020-01-01T00:00:00.000Z"}';

        expect(JSON.stringify(statement.getStatement())).toBe(expectedStatement);
    });

    test('A completed statement example', () => {
        const statement = xApi.cmi5.completed()
            .actor(alice)
            .activityId('http://www.awsome-courses.com/course-id')
            .activityName({value: 'The Awesome course'})
            .result('PT8H0M0S')
            .authority({name: 'Learning Record Provider', IFI: authority})
            .when(new Date('2020-01-01'));

        const expectedStatement = '{"version":"1.0.3","object":{"objectType":"Activity","type":"http://adlnet.gov/expapi/activities/cmi.interaction","id":"http://www.awsome-courses.com/course-id","definition":{"name":{"en-US":"The Awesome course"}}},"verb":{"id":"http://adlnet.gov/expapi/verbs/completed","display":{"en-US":"completed"}},"actor":{"objectType":"Agent","account":{"name":"Alice","homePage":"http://alice.me"}},"authority":{"objectType":"Agent","account":{"name":"authority-username","homePage":"http://www.example.com/learning-record-provider"},"name":"Learning Record Provider"},"timestamp":"2020-01-01T00:00:00.000Z","result":{"duration":"PT8H0M0S"}}';

        expect(JSON.stringify(statement.getStatement())).toBe(expectedStatement);
    });

});