const mongoose = require("mongoose");


var questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        trim: true,
        required : [true, 'Question text is a required field']
    },
    options: [String],
    answer: {
        type: Number,
        min: 0,
        max: 3,
        required: [true, 'Answer is a required field']
    },
    solution: {
        type: String,
        trim: true,
        required: false,
        default: ''
    },

});

questionSchema.path('options').validate({
    isAsync : false,
    validator: function (options) {
        return options.length === 4;
    },
    message: 'Each question will have 4 choices'
});

module.exports = mongoose.model("Quizpool", questionSchema);