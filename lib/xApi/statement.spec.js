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
            version: '1.0.3',
            actor: {foo: 'bar'}
        });
    });
    it('should allow to define a timestamp', () => {
        const statement = StatementFactory({})
            .when(new Date('2020-01-01'));

        expect(statement.getStatement()).toEqual({
            version: '1.0.3',
            timestamp: new Date('2020-01-01T00:00:00.000Z')
        })
    });
    it('should allow to define the authority', () => {
        const name = 'Learning Record Provider';
        const IFI = {
            key: 'account',
            getStatement() {
                return {
                    name: 'username',
                    homePage: 'http://www.example.com/learning-record-provider'
                };
            }
        };

        const statement = StatementFactory({})
            .authority({name, IFI});

        expect(statement.getStatement()).toEqual({
            version: '1.0.3',
            authority: {
                objectType: 'Agent',
                account: {
                    name: 'username',
                    homePage: 'http://www.example.com/learning-record-provider'
                },
                name: "Learning Record Provider"
            }
        })

    });
    describe('activity details', () => {
        it('should allow to define id', () => {
            const statement = StatementFactory({})
                .activityId('http://www.example.com/activity-id');

            expect(statement.getStatement()).toEqual({
                version: '1.0.3',
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
                    version: '1.0.3',
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
                    version: '1.0.3',
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
    });
});
