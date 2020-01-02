const statement = require('../../xApi/statement');

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

    return statement(state);
};

module.exports = registered;