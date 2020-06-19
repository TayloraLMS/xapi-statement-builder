const answeredBuilder = require('./answered');

describe('answered verb statement builder', () => {
    it('should generate the verb portion of the statement', () => {
        const answered = answeredBuilder();

        expect(answered.getStatement()).toEqual({
            version: "1.0.3",
            object: {
                objectType: 'Activity',
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
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
       const answered = answeredBuilder()
           .result('PT8H0M0S');

       expect(answered.getStatement()).toEqual({
           version: "1.0.3",
           object: {
               objectType: 'Activity',
               type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
           },
           verb: {
               "id": "http://adlnet.gov/expapi/verbs/answered",
               "display": {
                   "en-US": "answered"
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
