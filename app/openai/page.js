// Use it to create interface
const readline = require('readline')

const rl = readline.createInterface({
    // define input and output - stdin means import is from keyboard 
    input: process.stdin,
    // stdout output to the terminal
    output: process.stdout     
})
// 1st argu is the question, 2nd is a function once is submited
// takes argument as the aswer
rl.question('Youtube titles \n', (title) => console.log(title) )