const Account = ({name, homePage}) => ({
    key: 'account',
    stmt() {
        return {name, homePage}
    }
});

module.exports = Account;