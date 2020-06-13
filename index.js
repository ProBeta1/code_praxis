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