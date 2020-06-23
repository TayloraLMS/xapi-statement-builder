const statement = require('../../xApi/statement');
const {cmi5} = require('../../xApi/profiles');

const answered = () => {
    let state = {};
    const baseStatement = statement(cmi5.answered);

    return {
        ...baseStatement,
        result(score, success, completion, duration, response, progress) {
            state = {
                result: {
		    "score": score,
		    "success": success,
                    "completion": completion,
                    "duration": duration,
		    "response": response,
                    "extensions": {
                        "https://w3id.org/xapi/cmi5/result/extensions/progress": progress
                    }
                }
            };
            return this;
        },
        getStatement() {
            return {
                ...baseStatement.getStatement(),
                ...state,
            }
        }
    };
};

module.exports = answered;
