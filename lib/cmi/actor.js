const Actor = (account) => {

    if (account.key !== 'account') {
        throw new Error('Actor must be identified by account https://github.com/AICC/CMI-5_Spec_Current/blob/quartz/cmi5_spec.md#92-actor')
    }

    let state = {
        objectType: "Agent",
        [account.key]: account.stmt(),
    };

    return {
        key: 'actor',
        name (name) {
            state = {...state, name};
            return this;
        },
        stmt () {
            return state
        },
    }
};

module.exports = Actor;