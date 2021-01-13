const mongoose = require('mongoose');
const ArticleSchema = require('./article_schema');
const Schema = mongoose.Schema;

const ArticleBlogSchema = new Schema({
    title : String,
    content: String,
    comments : [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
})

const ArticleBlog = mongoose.model('articleBlog', ArticleBlogSchema)

module.exports = ArticleBlog;