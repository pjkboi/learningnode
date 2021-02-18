const collectAnswers = require("./lib/collectAnswers")

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your prefered programming language?"
];


const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => console.log(`question answered: ${answer}`));

answerEvents.on("complete", answers =>{
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
});
