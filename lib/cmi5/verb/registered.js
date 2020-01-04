const statement = require('../../xApi/statement');
const {cmi5} = require('../../xApi/profiles');

const registered = () => {
    let state = {
        ...cmi5.registered,
    };

    return {
        ...statement(state),
    };
};

module.exports = registered;