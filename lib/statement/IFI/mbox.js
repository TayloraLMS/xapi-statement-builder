const Mbox = (mbox, isHash = false) => ({
    name: isHash ? 'mbox_sha1sum' : 'mbox',
    stmt() {
        return mbox
    }
});

module.exports = Mbox;