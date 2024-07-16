const inquirer = require('inquirer')
const fs = require{'fs'}.promises
const steps = [];

const questions = [
    {
        name: 'title',
        message: 'Please enter a title'
    },
    {
         name: 'description',
        message: 'Please enter a description'
    }
]

function askstartingQuestions() {
    return inquirer.prompt(questions)
}

function askForInstallSteps(initialAnswerObj) {
    const addStep = () => {
        return inquirer.prompt ({
            name: 'step',
            message: 'Please enter the step text'
        }).then(stepanswerObj => {
            steps.push(stepanswerObj.step)
        })
    }

    return inquirer.prompt({
        name: 'choice',
        message: 'Enter an Installation step option',
        type: 'list',
        choice: ['Add an Installation step', 'Finish Installation steps']
    }).then(choiceAnswer => {
        switch(choiceAnswer.choice) {
            case 'Add an installation step':
                addStep()
                .then(askForInstallSteps)
            break;
        default:
            return finalQuestions(initialAnswerObj, steps);
        }
    })
}
function finalQuestions(initialAnswerObj, steps){

    console.log('final prompt to complete the README before we generate')

    const md = `
    #Title
    ${initialAnswerObj.title}
    ##Description
    ${initialAnswerObj.description}
    ##Installation Steps
    ${steps.map(step => `-${step}`).join('\n')}
    `

    return fs.writeFile('./README.md', md)
}

function init() {
    askstartingQuestions()
    .then(askForInstallSteps())
    .then(() => {
        console.log('REDME generated')
    })
}

init();