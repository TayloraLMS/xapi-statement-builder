const registered = () => {
    let state = {
        object: {
            objectType: 'Activity',
            type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
        },
        verb: {
            id: "http://adlnet.gov/expapi/verbs/registered",
            display: {
                "en-US": "registered"
            }
        }
    };

    function addLocalizedField(state, field, locale, value) {
        return {...state, [field]: {[locale]: value}}
    }

    return {
        activityId(id) {
            state = {
                object: {
                    ...state.object,
                    id,
                },
                verb: {
                    ...state.verb,
                }
            };

            return this;
        },
        activityName({value, locale = 'en-US'}) {
            state = {
                object: {
                    ...state.object,
                    definition: {
                        ...addLocalizedField(state.object.definition, 'name', locale, value)
                    },
                },
                verb: {
                    ...state.verb,
                }
            };
            return this;
        },
        activityDescription({value, locale = 'en-US'}) {
            state = {
                object: {
                    ...state.object,
                    definition: {
                        ...addLocalizedField(state.object.definition, 'description', locale, value)
                    },
                },
                verb: {
                    ...state.verb,
                }
            };
            return this;
        },
        actor(actor) {
            state = {
                ...state,
                actor: actor.getStatement(),
            };

            return this;
        },
        when(when){
            state = {...state, timestamp: when};
            return this;
        },
        getStatement() {
            return {...state};
        }
    }
};

module.exports = registered;