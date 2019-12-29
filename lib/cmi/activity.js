const activity = (id) => {

    const state = {
        objectType: 'Activity',
        definition: {}
    };

    function addLocalizedField(field, locale, value) {
        state.definition = {...state.definition, [field]: {[locale]: value}}
    }

    return {
        key: 'object',
        name({locale = 'en-US', value}) {
            addLocalizedField('name', locale, value);
            return this
        },

        description({locale = 'en-US', value}) {
            addLocalizedField('description', locale, value);
            return this
        },

        getStatement() {
            return {
                ...state,
                id,
                definition: {
                    ...state.definition,
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
                }
            }
        }
    }
};

module.exports = activity;