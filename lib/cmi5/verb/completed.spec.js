const completedBuilder = require('./completed');

describe('completed verb statement builder', () => {
    it('should generate the verb portion of the statement', () => {
        const completed = completedBuilder();

        expect(completed.getStatement()).toEqual({
            version: "1.0.3",
            object: {
                objectType: 'Activity',
		definition: {
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
            },
            verb: {
                "id": "http://adlnet.gov/expapi/verbs/completed",
                "display": {
                    "en-US": "completed"
                }
            }
        })
    });
});

describe('result', () => {
   it('should allow to define duration result', () => {
       const completed = completedBuilder()
           .result('PT8H0M0S');

       expect(completed.getStatement()).toEqual({
           version: "1.0.3",
           object: {
               objectType: 'Activity',
		definition: {
		    type: 'http://adlnet.gov/expapi/activities/cmi.interaction'
		}
           },
           verb: {
               "id": "http://adlnet.gov/expapi/verbs/completed",
               "display": {
                   "en-US": "completed"
               }
           },
           result: {
               completion: true,
               duration: 'PT8H0M0S',
               extensions: {
                   "https://w3id.org/xapi/cmi5/result/extensions/progress": 100
               }
           }
       })
   })
});
