$(document).ready(onReady);

function onReady()  {
    console.log('JS and JQ');
    renderMathHistory();
    $('#equals-button').on('click', clickEquals);
    $('#addition-button').on('click', addButton);
}


function clickEquals()   {
    const newMathProblem = {
        input: $('#problem-input').val()
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
            <li>${problem.input}</li>
          `)
        }
      }).catch((error) => {
        console.log('error', error);
      });
}

// function doMath(numOne, op, numTwo) {
//     let problem = `${numOne} ${op} ${numTwo}`
//     return problem;
// }

function addButton()  {
    let current = $('#problem-input').val();
    current += '+';
    $('#problem-input').val(current);
}