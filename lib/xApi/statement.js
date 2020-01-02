function addLocalizedField(state, field, locale, value) {
    return {...state, [field]: {[locale]: value}}
}

const statement = (state) => {

    return {
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
        activityId(id) {
            state = {
                ...state,
                object: {
                    ...state.object,
                    id,
                },
            };

            return this;
        },
        activityName({value, locale = 'en-US'}) {
            state = {
                ...state,
                object: {
                    ...state.object,
                    definition: {
                        ...addLocalizedField(state.object ? state.object.definition : {}, 'name', locale, value)
                    },
                },
            };
            return this;
        },
        activityDescription({value, locale = 'en-US'}) {
            state = {
                ...state,
                object: {
                    ...state.object,
                    definition: {
                        ...addLocalizedField(state.object ? state.object.definition : {}, 'description', locale, value)
                    },
                },
            };
            return this;
        },
        getStatement() {
            return state;
        }
    };
};

module.exports = statement;