const Activity = ({id, type}) => {

    const state = {
        objectType: 'Activity',
        definition: {}
    };

    return {
        key: 'object',
        name({locale = 'en-US', name}) {
            state.definition = {...state.definition, name: {[locale]: name}};
            return this
        },
        stmt() {
            return {
                ...state,
                id,
                definition: {
                    ...state.definition,
                    type
                }
            }
        }
    }
};

module.exports = Activity;