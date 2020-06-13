const mongoose = require('mongoose');
const Data_Structures= mongoose.model('data_structures');

module.exports = (app) => {

  app.get(`/api/data_structures`, async (req, res) => {
    let problems = await Data_Structures.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/data_structures`, async (req, res) => {
    let problem = await Data_Structures.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  })

}