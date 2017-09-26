let Surveys = require('./../controllers/surveys');
let Users = require('./../controllers/users');
let path = require('path');

module.exports = (app)=>{
	//Users
	app.post('/api/register', Users.register)
	app.get('/api/current', Users.currentUser)
	app.get('/api/logoff', Users.logout)

  //Surveys
	app.post('/api/createSurvey', Surveys.createSurvey)
	app.get('/api/getAllSurveys', Surveys.getAllSurveys)
	app.post('/api/show', Surveys.show)
	app.post('/api/like1', Surveys.like1)
	app.post('/api/like2', Surveys.like2)
	app.post('/api/like3', Surveys.like3)
	app.post('/api/like4', Surveys.like4)
	app.put('/api/destroy', Surveys.destroy)

	app.all('*', (req, res) => {
		res.sendFile(path.resolve('./public/dist/index.html'));
	})
}
