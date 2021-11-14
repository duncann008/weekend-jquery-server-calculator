$(document).ready(onReady);

function onReady()  {
    console.log('JS and JQ');
    renderMathHistory();
    $('#equals-button').on('click', clickEquals);
    $('#addition-button').on('click', addButton);
    $('#subtraction-button').on('click', subtractButton);
    $('#multiplication-button').on('click', multiplyButton);
    $('#division-button').on('click', divideButton);
    
    
}


let operator;

function addButton()  {
    let operator = $(this).text();
    console.log(operator);
    return operator;
}

function subtractButton()  {
    let operator = $(this).text();
    console.log(operator);
    return operator;
}

function multiplyButton()  {
    let operator = $(this).text();
    console.log(operator);
    return operator;
}

function divideButton()  {
    let operator = $(this).text();
    console.log(operator);
    return operator;
}

function clickEquals()   {
    let newMathProblem = {
        first: $('#first-input').val(),
        op: opTest,
        second: $('#second-input').val()
    }
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: newMathProblem
    }).then((response) => {
        console.log('YAY it worked');
        renderMathHistory();
    }).catch((error) => {
        console.log('it didnt work');
    })
}

function renderMathHistory() {
    $.ajax({
        method: 'GET',
        url: '/calculator'
      }).then((response) => {
        console.log('response', response);
        
        $('#math-history').empty();
        for (let problem of response) {
          $('#math-history').append(`
            <li>${problem.first} ${problem.op} ${problem.second}</li>
          `)
        }
      }).catch((error) => {
        console.log('error', error);
      });
}

function doMath(op, numOne, numTwo)   {
    switch (op) {
        case "+": 
            return numOne + numTwo;
        case "-":
            return numOne - numTwo;
        case "*":
            return numOne * numTwo;
        case "/":
            return numOne / numTwo;
        default: 
            alert("Input the first number, select an operator, and then input the second number before hitting '='.");
    }
}




// function checkOperator()    {
//     $.ajax({
//         method: 'GET',
//         url: '/calculator'
//       }).then((response) => {
//         for (let test of response) {
//             if (test.addOperator === '+') {
//                 operator = test.addOperator;
//                 return operator;
//             }
//             else if (test.subtractOperator === '-') {
//                 operator = test.subtractOperator;
//                 return operator;
//             }
//             else if (test.multiplyOperator === '*') {
//                 operator = test.multiplyOperator;
//                 return operator;
//             }
//             else if (test.divideOperator === '/') {
//                 operator = test.divideOperator;
//                 return operator;
//          }
//             else {
//                 console.log('woops');
//             }
//         }
//       }).catch((error) => {
//         console.log('error', error);
//       });
// }