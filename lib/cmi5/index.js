const actor = require('./actor');
const answered = require('./verb/answered');
const completed = require('./verb/completed');
const failed = require('./verb/failed');
const initialized = require('./verb/initialized');
const registered = require('./verb/registered');
const terminated = require('./verb/terminated');

const cmi5 = {
    actor,
    answered,
    completed,
    failed,
    initialized,
    registered,
    terminated
};

module.exports = cmi5;
