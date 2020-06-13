const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './.env' });


require("./models/users");
require("./models/Problem");
require("./models/Dp");
require("./models/data_structures");
require("./models/greedy");
require("./models/hashing");
require("./models/strings");
require("./models/sat");
require("./models/bitmasks");
require("./models/binary_search");
require("./models/brute_force");
require("./models/combinatorics");
require("./models/constructive_algorithms");
require("./models/dfs_and_similar");
require("./models/divide_and_conquer");
require("./models/dsu");
require("./models/expression_parsing");
require("./models/fft");
require("./models/flows");
require("./models/games");
require("./models/geometry");
require("./models/graph_matchings");
require("./models/graphs");
require("./models/implementation");
require("./models/math");
require("./models/matrices");
require("./models/number_theory");
require("./models/probabilities");
require("./models/schedules");
require("./models/shortest_paths");
require("./models/sortings");
require("./models/string_suffix_structures");
require("./models/ternary_search");
require("./models/trees");
require("./models/two_pointers");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.REACT_APP_API_KEY,{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());

// require the routes
require("./routes/problemRoutes")(app);
require("./routes/dpRoutes")(app);
require("./routes/data_structuresRoutes")(app);
require("./routes/greedyRoutes")(app);
require("./routes/hashingRoutes")(app);
require("./routes/stringsRoutes")(app);
require("./routes/satRoutes")(app);
require("./routes/userRoutes")(app);


//production env config
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});