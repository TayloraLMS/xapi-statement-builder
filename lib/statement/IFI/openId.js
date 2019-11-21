const OpenId = openid => ({
    name: 'openid',
    stmt() {
        return openid
    }
});

module.exports = OpenId;