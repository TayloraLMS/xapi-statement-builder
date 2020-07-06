const statement = require('../../xApi/statement');
const {cmi5} = require('../../xApi/profiles');

const terminated = () => {
    let state = {
        ...cmi5.terminated,
    };

    return {
        ...statement(state),
    };
};

module.exports = terminated;
