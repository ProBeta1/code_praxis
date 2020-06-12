const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './.env' });


require("./models/Problem");
require("./models/Dp");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.REACT_APP_API_KEY,{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());

// require the routes
require("./routes/problemRoutes")(app);
require("./routes/dpRoutes")(app);


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