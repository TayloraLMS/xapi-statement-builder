const mbox = (mbox, isHash = false) => ({
    key: isHash ? 'mbox_sha1sum' : 'mbox',
    getStatement() {
        return mbox
    }
});

module.exports = mbox;