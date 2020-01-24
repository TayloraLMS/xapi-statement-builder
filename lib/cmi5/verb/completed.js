const statement = require('../../xApi/statement');
const {cmi5} = require('../../xApi/profiles');

const completed = () => {
    let state = {};
    const baseStatement = statement(cmi5.completed);

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

module.exports = completed;