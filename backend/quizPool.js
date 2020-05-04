const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let quizpool = new Schema({
    quizTitle: {
        type: String
    },
    description: {
        type: String
    },
    question: {
        id: "0",
        category: "Common",
        questions: [
            {
                qid : 0,  
                questionDscb: "1 + 1 = ",
                answers: [
                    "2",
                    "3",
                    "1",
                    "5"
                ],
                correctIndex: 1
            }
        ]
    }


});

module.exports = mongoose.model("Quizpool", quizPool);