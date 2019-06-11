var express = require("express");
var request = require("request");
var app = express();

var PORT = process.env.PORT || 8080;
var corsOptions = {
  origin: process.env.ORIGIN_URL || "http://localhost",
  optionsSuccessStatus: 200
};

app.use(express.static("public"));

app.use("/cors/*", function(req, res) {
  req.pipe(request(req.params[0])).pipe(res);
});

app.listen(PORT, function() {
  console.log("CORS-enabled web server listening on port " + PORT);
});



// Change things like: `https://cors-anywhere.herokuapp.com/https://my-api.com`
// * To: `/api/https://my-api.com`

// There is nothing like that here. Is there something like that somehwere else?
// 'Like' that in what way?