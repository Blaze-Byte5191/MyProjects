const fs = require("fs");

// Change this if your JSON file has a different name
const FILE_NAME = "questions.json";

try {
    const raw = fs.readFileSync(FILE_NAME, "utf8");
    const data = JSON.parse(raw);

    let output = "";
    let count = 1;

    data.questionnaires.forEach(section => {

        section.questions.forEach(question => {

            output += "\n========================================\n";
            output += `QUESTION ${count}\n`;
            output += "========================================\n";
            output += question.text + "\n\n";

            question.choices.forEach((choice, index) => {

                const letter = String.fromCharCode(65 + index);

                if (choice.isCorrect) {
                    output += `${letter}. ${choice.text} <-- CORRECT\n`;
                } else {
                    output += `${letter}. ${choice.text}\n`;
                }

            });

            output += "\n";
            count++;
        });

    });

    fs.writeFileSync("results.txt", output);

    console.log(`Done! Extracted ${count - 1} questions.`);
    console.log("Results saved to results.txt");

} catch (err) {
    console.error(err);
}