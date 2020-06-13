const mongoose = require('mongoose');
const Sat= mongoose.model('sat');

module.exports = (app) => {

    app.get(`/api/sat`, async (req, res) => {
      let problems = await Sat.find();
      return res.status(200).send(problems);
    });
  
    app.post(`/api/sat`, async (req, res) => {
      let problem = await Sat.create(req.body);
      return res.status(201).send({
        error: false,
        problem
      })
    })
}