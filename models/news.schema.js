const mongoose = require("mongoose");
// const  {Schema} = mongoose

const schema = new mongoose.Schema({
    title:  {
        type: String,
        required: [true, "Hello title is required"],
        minlength: 5,
        maxlength: 20,
        trim: true
    },
    description:{
     type: String,
     required: [true, "Hello Description is required"],
     minlength: 20,
     trim: true
    },
    body: {
        type: String,
        required: [true, "Hello body is required"],
        minlength: 20,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    isValid: {
        type: Boolean,
        // required: [true, "isValid is required"]
        default: true
    },
    comment:  {
        type: [Object],
        required: [true, "comment is required"]
    },
    reactions:  {
        likes:  {
            type: Number
        }, 
        dislikes: {
            type: Number
        }
    }
    }, {timesstamps:true})

    const News = mongoose.model("News", schema);
    module.exports = News;
