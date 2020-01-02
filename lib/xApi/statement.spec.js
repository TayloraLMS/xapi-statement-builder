const StatementFactory = require('./statement');

describe('statement builder', () => {
    it('should allow to define an actor', () => {
        const mockActor = {
            getStatement() {
                return {foo: 'bar'}
            }
        };

        const statement = StatementFactory({})
            .actor(mockActor);

        expect(statement.getStatement()).toEqual({
            actor: {foo: 'bar'}
        });
    });
    it('should allow to define a timestamp', () => {
        const statement = StatementFactory({})
            .when(new Date('2020-01-01'));

        expect(statement.getStatement()).toEqual({
            timestamp: new Date('2020-01-01T00:00:00.000Z')
        })
    });
    describe('activity details', () => {
        it('should allow to define id', () => {
            const statement = StatementFactory({})
                .activityId('http://www.example.com/activity-id');

            expect(statement.getStatement()).toEqual({
                object: {
                    id: 'http://www.example.com/activity-id',
                }
            })
        });
        describe('defaulting to en-US', () => {
            it('should allow to define description', () => {
                const statement = StatementFactory({})
                    .activityDescription({value: 'foo description'});

                expect(statement.getStatement()).toEqual({
                    object: {
                        definition: {
                            description: {
                                'en-US': 'foo description',
                            }
                        },
                    }
                })
            });
            it('should allow to define name', () => {
                const statement = StatementFactory({})
                    .activityName({value: 'foo name'});

                expect(statement.getStatement()).toEqual({
                    object: {
                        definition: {
                            name: {
                                'en-US': 'foo name',
                            }
                        },
                    }
                })
            });
        });
    })
});