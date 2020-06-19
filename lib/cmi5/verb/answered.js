const statement = require('../../xApi/statement');
const {cmi5} = require('../../xApi/profiles');

const answered = () => {
    let state = {};
    const baseStatement = statement(cmi5.answered);

    return {
        ...baseStatement,
        result(duration) {
            state = {
                result: {
                    completion: true,
                    duration,
                    extensions: {
                        "https://w3id.org/xapi/cmi5/result/extensions/progress": 100
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
