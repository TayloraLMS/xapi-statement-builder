const OpenId = openid => ({
    key: 'openid',
    stmt() {
        return openid
    }
});

module.exports = OpenId;