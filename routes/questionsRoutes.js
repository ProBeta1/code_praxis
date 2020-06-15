const mongoose = require('mongoose');
const Questions = mongoose.model('questions');

module.exports = (app) => {

  app.get(`/api/questions`, async (req, res) => {
    let questions = await Questions.find();
    return res.status(200).send(questions);
  });

  app.get(`/api/questions/:rating`, async (req, res) => {
    const questions_rating = req.params.rating;
    Questions.find({rating : questions_rating}, function(error, questions) {
      assert.ifError(error);
      assert.ok(questions);
      return res.status(200).send(questions);
    });
  });

  // app.get(`/api/problem/:tag`, async (req, res) => {
  //   const problem_tag = req.params.tag;
  //   Problems.find({tag : problem_tag}, function(error, doc) {
  //     assert.ifError(error);
  //     assert.ok(doc);
  //     return res.status(200).send(doc);
  //   });
  // });

  app.post(`/api/questions`, async (req, res) => {
    let questions = await Questions.create(req.body);
    return res.status(201).send({
      error: false,
      questions
    })
  })

//   app.put(`/api/questions/:id`, async (req, res) => {
//     const {id} = req.params;

//     let problem = await Problem.findByIdAndUpdate(id, req.body);

//     return res.status(202).send({
//       error: false,
//       problem
//     })

//   });

//   app.delete(`/api/problem/:id`, async (req, res) => {
//     const {id} = req.params;

//     let problem = await Problem.findByIdAndDelete(id);

//     return res.status(202).send({
//       error: false,
//       problem
//     })

//   })

}