const mongoose = require('mongoose');
const Users= mongoose.model('users');

module.exports = (app) => {

  app.get(`/api/users`, async (req, res) => {
    let users = await Users.find();
    return res.status(200).send(users);
  });

  app.post(`/api/users`, async (req, res) => {
    let user = await Users.create(req.body);
    return res.status(201).send({
      error: false,
      user
    })
  })

}