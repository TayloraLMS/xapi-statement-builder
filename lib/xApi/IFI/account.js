const Account = ({name, homePage}) => ({
    key: 'account',
    getStatement() {
        return {name, homePage}
    }
});

module.exports = Account;