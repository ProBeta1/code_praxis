const mongoose = require('mongoose');
const Strings= mongoose.model('strings');

module.exports = (app) => {

  app.get(`/api/strings`, async (req, res) => {
    let problems = await Strings.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/strings`, async (req, res) => {
    let problem = await Strings.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  })

}