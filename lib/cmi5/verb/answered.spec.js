const answeredBuilder = require('./answered');

describe('answered verb statement builder', () => {
    it('should generate the verb portion of the statement', () => {
        const answered = answeredBuilder();

        expect(answered.getStatement()).toEqual({
            version: "1.0.3",
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: {
                "id": "http://adlnet.gov/expapi/verbs/answered",
                "display": {
                    "en-US": "answered"
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
	const success = false
	const completion = true
	const duration = "PT0H0M48S"
	const response = "2[,]5"
	const progress = 3
	const answered = answeredBuilder()
              .result(score, success, completion, duration, response, progress);

	expect(answered.getStatement()).toEqual({
            version: "1.0.3",
            object: {
		objectType: 'Activity',
		definition: {
		    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: {
		"id": "http://adlnet.gov/expapi/verbs/answered",
		"display": {
                    "en-US": "answered"
		}
            },
            result: {
		score,
		success,
                completion,
                duration,
		response,
                extensions: {
                    "https://w3id.org/xapi/cmi5/result/extensions/progress": progress
		}
	    }
	})
    })
});
