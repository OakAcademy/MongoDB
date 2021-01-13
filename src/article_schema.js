const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
})

module.exports = ArticleSchema;