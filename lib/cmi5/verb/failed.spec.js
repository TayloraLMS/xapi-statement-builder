const failedBuilder = require('./failed');

describe('failed verb statement builder', () => {
    it('should generate the verb portion of the statement', () => {
        const failed = failedBuilder();

        expect(failed.getStatement()).toEqual({
            version: "1.0.3",
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: {
                "id": "http://adlnet.gov/expapi/verbs/failed",
                "display": {
                    "en-US": "failed"
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
	const failed = failedBuilder()
              .result(score, duration, progress);

	expect(failed.getStatement()).toEqual({
            version: "1.0.3",
            object: {
		objectType: 'Activity',
		definition: {
		    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: {
		"id": "http://adlnet.gov/expapi/verbs/failed",
		"display": {
                    "en-US": "failed"
		}
            },
            result: {
		score,
		success: false,
                completion: true,
                duration,
                extensions: {
                    "https://w3id.org/xapi/cmi5/result/extensions/progress": progress
		}
	    }
	})
    })
});
