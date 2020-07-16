const passedBuilder = require('./passed');

describe('passed verb statement builder', () => {
    it('should generate the verb portion of the statement', () => {
        const passed = passedBuilder();

        expect(passed.getStatement()).toEqual({
            version: "1.0.3",
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: {
                "id": "http://adlnet.gov/expapi/verbs/passed",
                "display": {
                    "en-US": "passed"
                }
            }
        })
    });
});

describe('result', () => {
    it('should allow to define duration result', () => {
	const score = {
	    scaled: 0,
	    raw: 0,
	    min: 0,
	    max: 278
	}
	const duration = "PT0H0M48S"
	const progress = 100
	const passed = passedBuilder()
              .result(score, duration, progress);

	expect(passed.getStatement()).toEqual({
            version: "1.0.3",
            object: {
		objectType: 'Activity',
		definition: {
		    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: {
		"id": "http://adlnet.gov/expapi/verbs/passed",
		"display": {
                    "en-US": "passed"
		}
            },
            result: {
		score,
		success: true,
                completion: true,
                duration,
                extensions: {
                    "https://w3id.org/xapi/cmi5/result/extensions/progress": progress
		}
	    }
	})
    })
});
