const mongoose = require('mongoose');
const Upsolve = mongoose.model('upsolve');

module.exports = (app) => {

  app.get(`/api/upsolve`, async (req, res) => {
    let problems = await Upsolve.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/upsolve`, async (req, res) => {
    let problem = await Upsolve.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  })

}