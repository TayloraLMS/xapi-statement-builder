const account = ({name, homePage}) => ({
    key: 'account',
    getStatement() {
        return {name, homePage}
    }
});

module.exports = account;