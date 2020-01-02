const registered = () => {
    let state = {
        id: "http://adlnet.gov/expapi/verbs/registered",
        display: {
            "en-US": "registered"
        }
    };
    
    return {
        key: 'verb',
        getStatement() {
            return {...state};
        }
    }
};

module.exports = registered;