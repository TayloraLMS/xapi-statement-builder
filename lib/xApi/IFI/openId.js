const openId = openid => ({
    key: 'openid',
    getStatement() {
        return openid
    }
});

module.exports = openId;