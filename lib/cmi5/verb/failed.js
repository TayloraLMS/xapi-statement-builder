const statement = require('../../xApi/statement');
const {cmi5} = require('../../xApi/profiles');

const failed = () => {
    let state = {};
    const baseStatement = statement(cmi5.failed);

    return {
        ...baseStatement,
        result(score, success, completion, duration, progress) {
            state = {
                result: {
		    "score": score,
		    "success": success,
                    "completion": completion,
                    "duration": duration,
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

module.exports = failed;
