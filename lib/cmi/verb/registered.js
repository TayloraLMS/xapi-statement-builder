const Registered = () => {
    let state = {
        id: "http://adlnet.gov/expapi/verbs/registered"
    };

    function addLocalizedField(field, locale, value) {
        state = {...state, [field]: {[locale]: value}}
    }

    return {
        key: 'verb',
        display({locale = 'en-US', value}) {
            addLocalizedField('display', locale, value);
            return this
        },
        stmt() {
            return {...state};
        }
    }
};

module.exports = Registered;