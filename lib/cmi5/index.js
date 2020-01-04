const actor = require('./actor');
const registered = require('./verb/registered');
const completed = require('./verb/completed');

const cmi5 = {
    actor,
    registered,
    completed,
};

module.exports = cmi5;