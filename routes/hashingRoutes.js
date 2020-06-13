const mongoose = require('mongoose');
const Hashing= mongoose.model('hashing');

module.exports = (app) => {

  app.get(`/api/hashing`, async (req, res) => {
    let problems = await Hashing.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/hashing`, async (req, res) => {
    let problem = await Hashing.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  })

}