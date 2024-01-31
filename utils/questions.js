// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Name?",
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe this app?",
    },
    {
        type: "list",
        name: "license",
        message: "Does this app need a license?",
        choices: ["MIT", "APACHE 2.0", "Boost 1.0", "MPL 2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "usage",
        message: "How will this app be used?",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation requirements",
    },
    {
        type: "input",
        name: "owner",
        message: "Enter GitHub username",
    },
    {
        type: "input",
        name: "contact",
        message: "Enter your email",
    },
    {
        type: "input",
        name: "credit",
        message: "Are there any other contributers?",
    },
    {
        type: "input",
        name: "test",
        message: "How was this app tested?",
    },
];

module.exports = questions