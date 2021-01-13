const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content : String,
    students : {type : Schema.Types.ObjectId, ref: 'student'}
})

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment;