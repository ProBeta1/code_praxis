const mongoose = require('mongoose');
const DP= mongoose.model('dp');

module.exports = (app) => {

  app.get(`/api/dp`, async (req, res) => {
    let problems = await DP.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/dp`, async (req, res) => {
    let problem = await DP.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  })

}