let mongoose = require('mongoose');
let Survey = mongoose.model("Survey");

module.exports = {

  createSurvey: (req, res)=> {
    console.log('Hit createSurvey in Controllers', req.body);
    let newSurvey = new Survey(req.body);
    console.log('Is there a user stored in session?', req.session.user_id);
    newSurvey._user = req.session.user_id;
    newSurvey.save((err)=> {
      if (err) {
        console.log('error!', err);
        res.json(err);
      }
      else {
        console.log('Successfully Created Survey!');
        res.json(newSurvey);
      }
    })
  },

  getAllSurveys: (req, res)=> {
    console.log('Hit getAllSurveys in Controllers');
    Survey.find().populate('_user').exec((err, surveyList)=> {
      if(err) {
        console.log('Error!', err);
        res.json(err);
      }
      else {
        console.log('Successfully Grabbed survey list');
        res.json(surveyList);
      }
    })
  },

  show: (req, res)=> {
    console.log('hit show in controllers', req.body.s_id);
    Survey.findOne({_id: req.body.s_id}).exec((err, foundSurvey)=> {
      if(err) {
        console.log('Error!', err);
        res.json(err);
      }
      else {
        console.log('Found survey!', foundSurvey);
        res.json(foundSurvey);
      }
    })
  },

  like1: (req, res)=> {
    console.log('like in Controllers', req.body.s_id);
    Survey.findOne({_id: req.body.s_id}).exec((err, surveyFound)=> {
      if(err) {
        console.log('Error!', err);
        res.json(err);
      }
      else {
        let updateSurvey = surveyFound;
        updateSurvey.like1 += 1;
        updateSurvey.save((err, updateSurvey)=> {
          if(err) {
            console.log('error!', err);
            res.json(err);
          }
          else {
            console.log('error!', err);
            res.json(updateSurvey);
          }
        })
      }
    })
  },

  like2: (req, res)=> {
    console.log('like in Controllers', req.body.s_id);
    Survey.findOne({_id: req.body.s_id}).exec((err, surveyFound)=> {
      if(err) {
        console.log('Error!', err);
        res.json(err);
      }
      else {
        let updateSurvey = surveyFound;
        updateSurvey.like2 += 1;
        updateSurvey.save((err, updateSurvey)=> {
          if(err) {
            console.log('error!', err);
            res.json(err);
          }
          else {
            console.log('error!', err);
            res.json(updateSurvey);
          }
        })
      }
    })
  },

  like3: (req, res)=> {
    console.log('like in Controllers', req.body.s_id);
    Survey.findOne({_id: req.body.s_id}).exec((err, surveyFound)=> {
      if(err) {
        console.log('Error!', err);
        res.json(err);
      }
      else {
        let updateSurvey = surveyFound;
        updateSurvey.like3 += 1;
        updateSurvey.save((err, updateSurvey)=> {
          if(err) {
            console.log('error!', err);
            res.json(err);
          }
          else {
            console.log('error!', err);
            res.json(updateSurvey);
          }
        })
      }
    })
  },

  like4: (req, res)=> {
    console.log('like in Controllers', req.body.s_id);
    Survey.findOne({_id: req.body.s_id}).exec((err, surveyFound)=> {
      if(err) {
        console.log('Error!', err);
        res.json(err);
      }
      else {
        let updateSurvey = surveyFound;
        updateSurvey.like4 += 1;
        updateSurvey.save((err, updateSurvey)=> {
          if(err) {
            console.log('error!', err);
            res.json(err);
          }
          else {
            console.log('error!', err);
            res.json(updateSurvey);
          }
        })
      }
    })
  },

  destroy: (req, res)=> {
    console.log('hit destroy in Controllers!', req.body.s_id);
    Survey.findByIdAndRemove(req.body.s_id, (err, deletedSurvey)=> {
      if(err) {
        console.log("Error!", err);
        res.json(err);
      }
      else {
        console.log('Success!');
        res.json(deletedSurvey);
      }
    })
  }




}
