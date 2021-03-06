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
	interactionType(type) {
	    state = {
		...state,
                object: {
                    ...state.object,
		    definition: {
			...state.object.definition,
			interactionType: type
		    }
                }
	    };
	    return this;
	},
	correctResponsesPattern(responsesArray) {
	    state = {
		...state,
                object: {
                    ...state.object,
		    definition: {
			...state.object.definition,
			correctResponsesPattern: [responsesArray]
		    }
                }
	    };
	    return this;
	},
	choices(choicesArray) {
	    state = {
		...state,
                object: {
                    ...state.object,
		    definition: {
			...state.object.definition,
			choices: choicesArray
		    }
                }
	    };
	    return this;
	},
        authority({name, IFI}) {
            state = {
                ...state,
                authority: {
                    objectType: 'Agent',
                    [IFI.key]: IFI.getStatement(),
                    name
                }
            };

            return this;
        },
        getStatement() {
            return {
                version: '1.0.3',
                ...state
            };
        }
    };
};

module.exports = statement;
