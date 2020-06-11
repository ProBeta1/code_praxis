const mongoose = require('mongoose');
const Problem = mongoose.model('problems');

module.exports = (app) => {

  app.get(`/api/problem`, async (req, res) => {
    let problems = await Problem.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/problem`, async (req, res) => {
    let problem = await Problem.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  })

  app.put(`/api/problem/:id`, async (req, res) => {
    const {id} = req.params;

    let problem = await Problem.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      problem
    })

  });

  app.delete(`/api/problem/:id`, async (req, res) => {
    const {id} = req.params;

    let problem = await Problem.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      problem
    })

  })

}