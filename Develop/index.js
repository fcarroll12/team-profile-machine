const generateHtml = require("./src/generateHtml");
const figlet = require("figlet");
const fs = require("fs").promises;
const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


class CLI {
    constructor() {
        // initialize html to null. html will be created after user provides a name.
        this.html = null;
    }
    start() {
        new Promise((resolve, reject) => {
            figlet("Team Profile Machine", function (err, data) {
                if (err) {
                    reject(err);
                    return;
                }
                console.log(data);
                resolve();
            });
        })
            .catch(() => {
                // something is wrong with figlet.
                // provide fallback welcome message
                console.log("Welcome to Html Genie");
            })
            .then(() => {
                // return promise to continue chaining
                return inquirer.prompt([
                    {
                        type: "input",
                        message: "Provide a name for your team",
                        name: "teamName",
                    },
                ]);
            })
            .then(({ teamName }) => {
                this.team = new team(teamName);
                // return to chain any errors to the last .catch below
                this.addManager();
            })
            .catch((err) => this.handleError(err));
    }
    handleError(err) {
        console.log(err);
        console.log("Uh oh, Something went wrong! Scroll up. ");
    }
    addManager() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter manager name",
                    name: "managerName",
                },
                {
                    type: "number",
                    message: "Enter manager ID",
                    name: "managerID",
                },
                {
                    type: "input",
                    message: "Enter manager email",
                    name: "managerEmail",
                },
                {
                    type: "number",
                    message: "Enter manager office number",
                    name: "managerOfficeNumber",
                },
                {
                    type: "choices",
                    message: "Pick which type of team member you would like to add",
                    name: "employeeType",
                    choices: [{ name: "Engineer", value: "addEngineer" },
                    { name: "Intern", value: "addIntern" }],
                }
            ])
            .then((response) => {
                this.manager = new Manager(response);
                this.addManager();
            });
    }
    addEngineer() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter engineer name",
                    name: "engineerName",
                },
                {
                    type: "input",
                    message: "Enter engineer email",
                    name: "engineerEmail",
                },
                {
                    type: "input",
                    message: "Enter engineer GitHub",
                    name: "engineerGitHub",
                },
            ])
            .then((response) => {
                this.engineer = new Engineer(response);
                this.addEngineer();
            });
    }
    addIntern() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    message: "Enter intern name",
                    name: "internName",
                },
                {
                    type: "input",
                    message: "Enter intern email",
                    name: "internEmail",
                },
                {
                    type: "input",
                    message: "Enter intern school",
                    name: "internSchool",
                },
            ])
            .then((response) => {
                this.intern = new Intern(response);
                this.addIntern();
            });
    }
    generateHtml() {
        const html = generateHtml(this.index);
        fs.writeFile("dist/index.html", html)
            .then(() => {
                console.log(
                    "Created index.html file. You'll find it in the 'dist' folder."
                );
            })
            .catch((err) => this.handleError(err));
    }
}
module.exports = CLI;
// Bonus using writeFileSync as a promise
// const init = () => {
//     promptUser()
//         // Use writeFileSync method to use promises instead of a callback function
//         .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
//         .then(() => console.log('Successfully wrote to index.html'))
//         .catch((err) => console.error(err));
// };

// init();