var num1;
var num2;            
var operation; 

const readline = require('readline');

const rl1 = readline.createInterface({input: process.stdin, output: process.stdout});
rl1.question('Enter the first number: ',
(userInput)=>{
    num1 = userInput;
    rl1.close();
});

const rl2 = readline.createInterface({input: process.stdin, output: process.stdout});  
rl2.question('Enter the second number: ',
(userInput)=>{
    num2 = userInput;
    rl2.close();
});

const rl3 = readline.createInterface({input: process.stdin, output: process.stdout});                                
rl3.question('Operation(+ or - or * or /) ',
(userInput)=>{
    operation = userInput;
    rl3.close();
});

if(operation == '+'){
    console.log('the answer is: ' + num1 + num2);
}
else if(operation == '-'){
    console.log('the answer is: ' + num1 - num2);
}
else if(operation == '*'){
    console.log('the answer is: ' + num1 * num2);
}
else {
    if(num2 == 0)
        console.log('division not possible');
    else 
        console.log('the answer is: ' + num1/num2);
}