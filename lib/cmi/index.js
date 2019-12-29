const actor = require('./actor');
const activity = require('./activity');
const registered = require('./verb/registered');

const cmi5 = {
    actor,
    activity,
    registered,
    buildNewStatement() {

        let state = {
            actor: null,
            authority: null,
            timestamp: new Date(),
            version: '1.0.0',
            verb: null,
            object: null,
        };

        return {
            actor(actor) {
                state = {...state, actor};
                return this;
            },
            verb(verb) {
                state = {...state, verb};
                return this;
            },
            object(object) {
                state = {...state, object};
                return this;
            },
            when(when){
                state = {...state, timestamp: when};
                return this;
            },
            stmt(){
                return {
                    ...state,
                    actor: state.actor.stmt(),
                    verb: state.verb.stmt(),
                    object: state.object.stmt()
                }
            }
        }
    }
};

module.exports = cmi5;