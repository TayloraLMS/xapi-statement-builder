const Actor = (account) => {

    let state = {
        objectType: "Agent",
        [account.name]: account.stmt(),
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