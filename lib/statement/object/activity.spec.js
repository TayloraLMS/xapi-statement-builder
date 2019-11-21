const Activity = require('./activity');

describe('activity statement builder', () => {

    const id = 'http://www.example.com/activity-id';

    test('it should have the right key', () => {
        const aCourse = Activity(id);

        expect(aCourse.key).toEqual('object');
    });

    describe('should generate the object portion of the statement', () => {
        const aCourse = Activity(id);

        expect({[aCourse.key]: aCourse.stmt()}).toEqual({
            object: {
                objectType: "Activity",
                id: 'http://www.example.com/activity-id',
                definition: {
                    type: "http://adlnet.gov/expapi/activities/cmi.interaction",
                }
            }
        });
    });

    describe('it should allow an optional name', () => {

        test('it should default to en-US', () => {
            const aCourse = Activity(id)
                .name({name: 'A Nice Course'});

            expect({[aCourse.key]: aCourse.stmt()}).toEqual({
                object: {
                    objectType: "Activity",
                    id: 'http://www.example.com/activity-id',
                    definition: {
                        type: "http://adlnet.gov/expapi/activities/cmi.interaction",
                        name: {'en-US': "A Nice Course"}
                    }
                }
            });
        });

        test('it should allow any locale', () => {
            const aCourse = Activity(id)
                .name({locale: 'it-IT', name: 'A Nice Course'});

            expect({[aCourse.key]: aCourse.stmt()}).toEqual({
                object: {
                    objectType: "Activity",
                    id: 'http://www.example.com/activity-id',
                    definition: {
                        type: "http://adlnet.gov/expapi/activities/cmi.interaction",
                        name: {'it-IT': "A Nice Course"}
                    }
                }
            });
        })
    })
});