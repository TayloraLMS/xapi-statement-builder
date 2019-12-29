const OpenId = openid => ({
    key: 'openid',
    getStatement() {
        return openid
    }
});

module.exports = OpenId;