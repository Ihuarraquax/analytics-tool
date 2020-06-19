const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const app = express();
const csv=require('csvtojson');
var cors = require('cors')

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'analiza-finansowa-gieldy/build')));
app.use(cors());
// Put all API endpoints under '/api'
app.get('/api/updateCSV', (req, res) => {
  const file = fs.createWriteStream(`${__dirname}/analiza-finansowa-gieldy/build/wig20_d.csv`);
  const request = https.get("https://stooq.pl/q/d/l/?s=wig20&i=d", function (response) {
    response.pipe(file);
    file.close()
    res.send('gut')
  });

});

app.get('/api', (req, res) => {
  let index = req.query.index;
  https.get("https://stooq.pl/q/d/l/?s="+index+"&i=d", function (response) {
    var csvData = '';
    response.on('data', function (chunk) {
      csvData += chunk;
    });
    response.on('end', function () {
      // prints the full CSV file
      csv().fromString(csvData)
      .then((csvObj)=>{
        console.log("send parsed csv")
        res.json(csvObj)
      })
    });
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/analiza-finansowa-gieldy/build/index.html'));
});

const port = process.env.PORT || 9000;
app.listen(port);
