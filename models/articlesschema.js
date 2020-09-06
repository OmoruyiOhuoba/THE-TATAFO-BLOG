const mongoose = require("mongoose");

const ArticlesSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
}, {timestamps: true});

module.exports = mongoose.model("Articles", ArticlesSchema);