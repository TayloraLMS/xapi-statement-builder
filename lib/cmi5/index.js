const actor = require('./actor');
const registered = require('./verb/registered');
const initialized = require('./verb/initialized');
const answered = require('./verb/answered');
const completed = require('./verb/completed');

const cmi5 = {
    actor,
    registered,
    initialized,
    answered,
    completed
};

module.exports = cmi5;
