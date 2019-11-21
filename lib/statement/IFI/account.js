const Account = ({name, homePage}) => ({
    name: 'account',
    stmt() {
        return {name, homePage}
    }
});

module.exports = Account;