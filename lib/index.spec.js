const xApi = require ('./index');
const choice = require('./xApi/IFI/choice');

describe('public api', () => {
    const authority = xApi.IFI.account({
        name: 'authority-username',
        homePage: 'http://www.example.com/learning-record-provider'
    });
    const alice = xApi.cmi5.actor(xApi.IFI.account({name: 'Alice', homePage: 'http://alice.me'}));


    test('A registered statement example', () => {
        const statement = xApi.cmi5.registered()
              .activityId('http://www.awsome-courses.com/course-id')
              .activityName({value: 'The Awesome course'})
              .actor(alice)
              .authority({name: 'Learning Record Provider', IFI: authority})
              .when(new Date('2020-01-01'));

        const expectedStatement = '{"version":"1.0.3","object":{"objectType":"Activity","type":"http://adlnet.gov/expapi/activities/cmi.interaction","id":"http://www.awsome-courses.com/course-id","definition":{"name":{"en-US":"The Awesome course"}}},"verb":{"id":"http://adlnet.gov/expapi/verbs/registered","display":{"en-US":"registered"}},"actor":{"objectType":"Agent","account":{"name":"Alice","homePage":"http://alice.me"}},"authority":{"objectType":"Agent","account":{"name":"authority-username","homePage":"http://www.example.com/learning-record-provider"},"name":"Learning Record Provider"},"timestamp":"2020-01-01T00:00:00.000Z"}';

        expect(JSON.stringify(statement.getStatement())).toBe(expectedStatement);
    });


    test('A initialized statement example', () => {
        const statement = xApi.cmi5.initialized()
              .activityId('http://www.awsome-courses.com/course-id')
              .activityName({value: 'The Awesome course'})
              .actor(alice)
              .authority({name: 'Learning Record Provider', IFI: authority})
              .when(new Date('2020-01-01'));

        const expectedStatement = '{"version":"1.0.3","object":{"objectType":"Activity","type":"http://adlnet.gov/expapi/activities/cmi.interaction","id":"http://www.awsome-courses.com/course-id","definition":{"name":{"en-US":"The Awesome course"}}},"verb":{"id":"http://adlnet.gov/expapi/verbs/initialized","display":{"en-US":"initialized"}},"actor":{"objectType":"Agent","account":{"name":"Alice","homePage":"http://alice.me"}},"authority":{"objectType":"Agent","account":{"name":"authority-username","homePage":"http://www.example.com/learning-record-provider"},"name":"Learning Record Provider"},"timestamp":"2020-01-01T00:00:00.000Z"}';

        expect(JSON.stringify(statement.getStatement())).toBe(expectedStatement);
    });


    test('An answered statement example', () => {
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
	const choice_1 = choice(1, "Conoscere la funzione ricoperta dalla persona che si deve incontrare.")
	const choice_2 = choice(2, "Informarsi sul settore merceologico e l'attività dell'azienda.")
	const choice_3 = choice(3, "Impostare un Business Case per il cliente.")
	const choice_4 = choice(4, "Prepararsi ad effettuare una Demo al Cliente.")
	const choice_5 = choice(5, "Redigere una bozza di offerta per il Cliente.")
	const choices = [
	    choice_1,
	    choice_2,
	    choice_3,
	    choice_4,
	    choice_5,
        ]

        const statement = xApi.cmi5.answered()
              .actor(alice)
              .activityId('http://www.awsome-courses.com/course-id')
              .activityName({value: 'The Awesome course'})
	      .activityDescription({value: "Select the right answers"})
	      .interactionType('choice')
	      .choices(choices)
	      .correctResponsesPattern('1[,]2')
              .result(score, success, completion, duration, response, progress)
              .authority({name: 'Learning Record Provider', IFI: authority})
              .when(new Date('2020-01-01'));

        const expectedStatement = '{"version":"1.0.3","object":{"objectType":"Activity","type":"http://adlnet.gov/expapi/activities/cmi.interaction","id":"http://www.awsome-courses.com/course-id","definition":{"name":{"en-US":"The Awesome course"},"description":{"en-US":"Select the right answers"},"interactionType":"choice","choices\":[{"id":"1","description":{"en-US":"Conoscere la funzione ricoperta dalla persona che si deve incontrare."}},{"id":"2","description":{"en-US":"Informarsi sul settore merceologico e l\'attività dell\'azienda."}},{"id":"3","description":{"en-US":"Impostare un Business Case per il cliente."}},{"id":"4","description":{"en-US":"Prepararsi ad effettuare una Demo al Cliente."}},{"id":"5","description":{"en-US":"Redigere una bozza di offerta per il Cliente."}}],"correctResponsesPattern":["1[,]2"]}},"verb":{"id":"http://adlnet.gov/expapi/verbs/answered","display":{"en-US":"answered"}},"actor":{"objectType":"Agent","account":{"name":"Alice","homePage":"http://alice.me"}},"authority":{"objectType":"Agent","account":{"name":"authority-username","homePage":"http://www.example.com/learning-record-provider"},"name":"Learning Record Provider"},"timestamp":"2020-01-01T00:00:00.000Z","result":{"score":{"scaled":0,"raw":0,"min":0,"max":278},"success":false,"completion":true,"duration":"PT0H0M48S","response":"2[,]5","extensions":{"https://w3id.org/xapi/cmi5/result/extensions/progress":3}}}';
        expect(JSON.stringify(statement.getStatement())).toBe(expectedStatement);
    });


    test('A completed statement example', () => {
        const statement = xApi.cmi5.completed()
              .actor(alice)
              .activityId('http://www.awsome-courses.com/course-id')
              .activityName({value: 'The Awesome course'})
              .result('PT8H0M0S')
              .authority({name: 'Learning Record Provider', IFI: authority})
              .when(new Date('2020-01-01'));

        const expectedStatement = '{"version":"1.0.3","object":{"objectType":"Activity","type":"http://adlnet.gov/expapi/activities/cmi.interaction","id":"http://www.awsome-courses.com/course-id","definition":{"name":{"en-US":"The Awesome course"}}},"verb":{"id":"http://adlnet.gov/expapi/verbs/completed","display":{"en-US":"completed"}},"actor":{"objectType":"Agent","account":{"name":"Alice","homePage":"http://alice.me"}},"authority":{"objectType":"Agent","account":{"name":"authority-username","homePage":"http://www.example.com/learning-record-provider"},"name":"Learning Record Provider"},"timestamp":"2020-01-01T00:00:00.000Z","result":{"completion":true,"duration":"PT8H0M0S","extensions":{"https://w3id.org/xapi/cmi5/result/extensions/progress":100}}}';
        expect(JSON.stringify(statement.getStatement())).toBe(expectedStatement);
    });
});
