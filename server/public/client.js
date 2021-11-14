$(document).ready(onReady);

function onReady()  {
    console.log('JS and JQ');
    renderMathHistory();
    $('#equals-button').on('click', clickEquals);
    $('#addition-button').on('click', addButton);
    $('#subtraction-button').on('click', subtractButton);
    $('#multiplication-button').on('click', multiplyButton);
    $('#division-button').on('click', divideButton);
    $('#clear-button').on('click', clearButton);
    
}


let operator;

function addButton()  {
    operator = $(this).text();
    console.log(operator);
    return operator;
}

function subtractButton()  {
    operator = $(this).text();
    console.log(operator);
    return operator;
}

function multiplyButton()  {
    operator = $(this).text();
    console.log(operator);
    return operator;
}

function divideButton()  {
    operator = $(this).text();
    console.log(operator);
    return operator;
}

function clickEquals()   {
    const newMathProblem = {
        first: $('#first-input').val(),
        op: operator,
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
        alert("Input the first number, select an operator, and then input the second number before hitting '='.");
    })
}

function renderMathHistory() {
    $.ajax({
        method: 'GET',
        url: '/calculator'
      }).then((response) => {
        console.log('response', response);
        response.reverse();
        $('#math-history').empty();
        for (let problem of response) {
          $('#math-history').append(`
            <li>${problem.first} ${problem.op} ${problem.second} = ${problem.result}</li>
          `)
        }
        let theResult = result(response);
        $('h2').append(theResult);
      }).catch((error) => {
        console.log('error', error);
        
      });
}

function result(results)   {
    let currentResult = results[0].result;
    return currentResult;
}

function clearButton()  {
    $('#first-input').val('');
    $('#second-input').val('');
    $('h2').empty();
}

