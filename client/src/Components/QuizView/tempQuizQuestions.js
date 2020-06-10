const qBank = [
  {
    question:
      "What is 1+1?   ",
    answers: ["1", "6", "2", "3"],
    correct: "2",
    questionId: "099099"
  },
  {
    question: "What is 2+1?",
    answers: ["1", "6", "2", "3"],
    correct: "3",
    questionId: "183452"
  },
  {
    question:"What is 3+1?",
    answers: ["4", "6", "2", "3"],
    correct: "4",
    questionId: "267908"
  },
  {
    question: "What is 4+1?",
    answers: ["5", "6", "2", "3"],
    correct: "5",
    questionId: "333247"
  },
  {
    question: "What is 5+1?",
    answers: ["1", "6", "2", "3"],
    correct: "6",
    questionId: "496293"
  },
  {
    question:"What is 6+1?",
    answers: ["1", "7", "2", "3"],
    correct: "7",
    questionId: "588909"
  },
  {
    question:"What is 7+1?",
    answers: ["7", "6", "8", "3"],
    correct: "8",
    questionId: "648452"
  }

];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
