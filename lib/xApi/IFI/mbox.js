const Mbox = (mbox, isHash = false) => ({
    key: isHash ? 'mbox_sha1sum' : 'mbox',
    stmt() {
        return mbox
    }
});

module.exports = Mbox;