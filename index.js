const express = require("express"),
    app = express(),
    multer = require("multer"),
    path = require("path");

//storage engine
app.use("/profile", express.static("upload/images"))

let uploadRoutes = require("./routes/upload");
app.use("/api", uploadRoutes);
app.listen(5001, () => {
    console.log('App listening on port 5001!');
});