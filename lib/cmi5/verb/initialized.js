const statement = require('../../xApi/statement');
const {cmi5} = require('../../xApi/profiles');

const initialized = () => {
    let state = {
        ...cmi5.initialized,
    };

    return {
        ...statement(state),
    };
};

module.exports = initialized;
