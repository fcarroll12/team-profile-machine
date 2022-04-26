
// function createEmployeeType (employeeType){
//     if (employeeType === 'Engineer') {
//         return;
//     }
//     if (employeeType === 'Intern') {
//         return;
//     }
// };
const renderHtml = (html) => {
    return html.card
        .map((card) => `<div class="card-header">${card.toString()}</li>`)
        .join("");
};
const Html = (html) => {
    console.log(html)
    const generateManager = (manager) => {
        console.log(manager)
        return `
        <div class="card-header">
                    <h2 class="card-title">${manager.managerName}</h2>
                    <h4 class="card-title"> Manager </h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.managerID} </li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.managerEmail}"> ${manager.managerEmail}</a></li>
                        <li class="list-group-item">Office Number:${manager.managerOfficeNumber} </a></li>
                    </ul>
                </div>
        `;
    };
    const generateEngineer = (engineer) => {
        console.log(engineer)
        return `
        <div class="card-header">
                    <h2 class="card-title">${manager.engineerName}</h2>
                    <h4 class="card-title"> Engineer </h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.engineerID} </li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.engineerEmail}"> ${manager.managerEmail}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${manager.engineerGitHub}"> ${manager.engineerGitHub} </a></li>
                    </ul>
                </div>
        `;
    };
    const generateIntern = (intern) => {
        console.log(intern)
        return `
        <div class="card-header">
                    <h2 class="card-title">${manager.internName}</h2>
                    <h4 class="card-title"> Intern </h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.internID} </li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.internEmail}"> ${manager.internEmail}</a></li>
                        <li class="list-group-item">School: ${manager.internSchool}</li>
                    </ul>
                </div>
        `;
    };

};
const generateHtml = (html) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Team Profile Machine</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid d-flex justify-content-center">
        <div class="container">
            <h1 class="display-4 text-center">My Team</h1>
        </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
        <div class="card d-flex align-items-center">
           ${renderHtml(html)};
    </div>
</body>

</html>
    
    
`;
};

module.exports = generateHtml;