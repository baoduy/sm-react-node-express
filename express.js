/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();
const port = process.env.PORT || 3000;
const distFolder = "dist";

app.use(compression());

app.get("*", (req, res, next) => {
  //If URL is not a file
  if (!path.extname(req.url)) {
    console.debug(`redirect the ${req.url} to index.html`);
    req.url = "/";
  }

  next();
});

app.use(express.static(distFolder));

app.listen(port, function(err) {
  if (err) console.log(err);
  else console.log(`Express web server started: http://localhost:${port}`);
});
