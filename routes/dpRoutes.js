const mongoose = require('mongoose');
const DP= mongoose.model('dp');
const Bitmasks= mongoose.model('bitmasks');
const Binary_search= mongoose.model('binary_search');
const Brute_force= mongoose.model('brute_force');
const Combinatorics= mongoose.model('combinatorics');
const Constructive_algorithms= mongoose.model('constructive_algorithms');
const Dfs_and_similar= mongoose.model('dfs_and_similar');
const Divide_and_conquer= mongoose.model('divide_and_conquer');
const Dsu= mongoose.model('dsu');
const Expression_parsing= mongoose.model('expression_parsing');
const Fft= mongoose.model('fft');
const Flows= mongoose.model('flows');
const Games= mongoose.model('games');
const Geometry= mongoose.model('geometry');
const Graph_matchings= mongoose.model('graph_matchings');
const Graphs= mongoose.model('graphs');
const Implementation= mongoose.model('implementation');
const Math= mongoose.model('math');
const Matrices= mongoose.model('matrices');
const Number_theory= mongoose.model('number_theory');
const Probabilities= mongoose.model('probabilities');
const Schedules= mongoose.model('schedules');
const Shortest_paths= mongoose.model('shortest_paths');
const Sortings= mongoose.model('sortings');
const String_suffix_structures= mongoose.model('string_suffix_structures');
const Ternary_search= mongoose.model('ternary_search');
const Trees= mongoose.model('trees');
const Two_pointers= mongoose.model('two_pointers');

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
  });

  app.get(`/api/bitmasks`, async (req, res) => {
    let problems = await Bitmasks.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/bitmasks`, async (req, res) => {
    let problem = await Bitmasks.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/binary_search`, async (req, res) => {
    let problems = await Binary_search.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/binary_search`, async (req, res) => {
    let problem = await Binary_search.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/brute_force`, async (req, res) => {
    let problems = await Brute_force.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/brute_force`, async (req, res) => {
    let problem = await Brute_force.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/combinatorics`, async (req, res) => {
    let problems = await Combinatorics.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/combinatorics`, async (req, res) => {
    let problem = await Combinatorics.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/constructive_algorithms`, async (req, res) => {
    let problems = await Constructive_algorithms.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/constructive_algorithms`, async (req, res) => {
    let problem = await Constructive_algorithms.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/dfs_and_similar`, async (req, res) => {
    let problems = await Dfs_and_similar.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/dfs_and_similar`, async (req, res) => {
    let problem = await Dfs_and_similar.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/divide_and_conquer`, async (req, res) => {
    let problems = await Divide_and_conquer.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/divide_and_conquer`, async (req, res) => {
    let problem = await Divide_and_conquer.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/dsu`, async (req, res) => {
    let problems = await Dsu.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/dsu`, async (req, res) => {
    let problem = await Dsu.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/expression_parsing`, async (req, res) => {
    let problems = await Expression_parsing.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/expression_parsing`, async (req, res) => {
    let problem = await Expression_parsing.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/fft`, async (req, res) => {
    let problems = await Fft.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/fft`, async (req, res) => {
    let problem = await Fft.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/flows`, async (req, res) => {
    let problems = await Flows.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/flows`, async (req, res) => {
    let problem = await Flows.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/games`, async (req, res) => {
    let problems = await Games.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/games`, async (req, res) => {
    let problem = await Games.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/geometry`, async (req, res) => {
    let problems = await Geometry.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/geometry`, async (req, res) => {
    let problem = await Geometry.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/graphs`, async (req, res) => {
    let problems = await Graphs.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/graphs`, async (req, res) => {
    let problem = await Graphs.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/graph_matchings`, async (req, res) => {
    let problems = await Graph_matchings.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/graph_matchings`, async (req, res) => {
    let problem = await Graph_matchings.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/implementation`, async (req, res) => {
    let problems = await Implementation.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/implementation`, async (req, res) => {
    let problem = await Implementation.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/math`, async (req, res) => {
    let problems = await Math.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/math`, async (req, res) => {
    let problem = await Math.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/matrices`, async (req, res) => {
    let problems = await Matrices.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/matrices`, async (req, res) => {
    let problem = await Matrices.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/number_theory`, async (req, res) => {
    let problems = await Number_theory.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/number_theory`, async (req, res) => {
    let problem = await Number_theory.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/probabilities`, async (req, res) => {
    let problems = await Probabilities.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/probabilities`, async (req, res) => {
    let problem = await Probabilities.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/schedules`, async (req, res) => {
    let problems = await Schedules.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/schedules`, async (req, res) => {
    let problem = await Schedules.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/shortest_paths`, async (req, res) => {
    let problems = await Shortest_paths.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/shortest_paths`, async (req, res) => {
    let problem = await Shortest_paths.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/sortings`, async (req, res) => {
    let problems = await Sortings.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/sortings`, async (req, res) => {
    let problem = await Sortings.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/string_suffix_structures`, async (req, res) => {
    let problems = await String_suffix_structures.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/string_suffix_structures`, async (req, res) => {
    let problem = await String_suffix_structures.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/ternary_search`, async (req, res) => {
    let problems = await Ternary_search.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/ternary_search`, async (req, res) => {
    let problem = await Ternary_search.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/trees`, async (req, res) => {
    let problems = await Trees.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/trees`, async (req, res) => {
    let problem = await Trees.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  });

  app.get(`/api/two_pointers`, async (req, res) => {
    let problems = await Two_pointers.find();
    return res.status(200).send(problems);
  });

  app.post(`/api/two_pointers`, async (req, res) => {
    let problem = await Two_pointers.create(req.body);
    return res.status(201).send({
      error: false,
      problem
    })
  })

}