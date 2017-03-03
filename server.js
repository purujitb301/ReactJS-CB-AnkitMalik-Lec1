/**
 * Created by hp on 03-03-2017.
 */
const express = require("express");

const app = express();
app.use(express.static("static"));
app.listen(3000, function () {

    console.log("Listening on port 3000");

});