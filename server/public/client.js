$(document).ready(onReady);

function onReady()  {
    console.log('JS and JQ');
    renderMathHistory();
    $('#addition-button').on('click', addButton);
    $('#subtraction-button').on('click', subtractButton);
    $('#multiplication-button').on('click', multiplyButton);
    $('#division-button').on('click', divideButton);
    $('#equals-button').on('click', clickEquals);
    
}



function clickEquals()   {
    const newMathProblem = {
        first: $('#first-input').val(),
        addOperator: addButton(),
        subtractOperator: subtractButton(),
        multiplyOperator: multiplyButton(),
        divideOperator: divideButton(),
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
            <li>${problem.first} ${problem.addOperator} ${problem.second}</li>
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


function addButton()  {
    let addOp = $('#addition-button').text();
    console.log(addOp);
    return addOp;
}

function subtractButton()  {
    let subtractOp = $('#subtraction-button').text();
    console.log(subtractOp);
    return subtractOp;
}

function multiplyButton()  {
    let multiplyOp = $('#multiplication-button').text();
    console.log(multiplyOp);
    return multiplyOp;
}

function divideButton()  {
    let divisionOp = $('#division-button').text();
    console.log(divisionOp);
    return divisionOp;
}

let test = $('#subtraction-button').text();
console.log(test);