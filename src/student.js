const mongose = require("mongoose");
const Schema = mongose.Schema;
const ArticleSchema = require('./article_schema')

const StudentSchema = new Schema({
    name : {
        type : String,  
        required : [true, 'Name is required'],
        validate: {
            validator: (name) => name.length >2 ,
            message: 'Name is too short'
        }
    },
    studentNumber : Number, 
    grade: Number,
    articles : [ArticleSchema],
    articleBlog: [{
        type: Schema.Types.ObjectId,
        ref: 'articleBlog'
    }]
})

StudentSchema.virtual('articleCount').get(function() {
    // console.log('Run the getter function')
    return this.articles.length
})

const Student = mongose.model("student", StudentSchema);

module.exports = Student;