const choice = (id, description, lang='en-US') => {
    return {
	"id": id.toString(),
	"description": {
	    [lang]: description
	}
    }
};

module.exports = choice;
