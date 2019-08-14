const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin, (req, res) => {

        const survey = new Survey({
            title: req.body.title,
            subject: req.body.subject,
            body: req.body.body,
            recipients: recipients.body.recipients
                        .split(',')
                        .map(email => ({ email })),
            _user: req.user.id, //id generated by mongo
            dateCreated: Date.now()
        });

        //Great place to send an email
        const mailer = new Mailer(survey, surveyTemplate(survey));

    });
};



