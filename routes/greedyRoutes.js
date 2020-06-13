const mongoose = require('mongoose');
const Greedy= mongoose.model('greedy');

module.exports = (app) => {

  app.get(`/api/greedy`, async (req, res) => {
    let problems = await Greedy.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/greedy`, async (req, res) => {
    let problem = await Greedy.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  })

}