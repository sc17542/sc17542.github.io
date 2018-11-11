function squareNumber(num) {
    result = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + result + '.');
    solution.innerHTML = '<p>The result of squaring the number ' + num + ' is ' + result + '.</p>';
    return result;
}

function halfNumber(num) {
    result = num / 2;
    console.log('Half of ' + num + ' is ' + result + '.');
    solution.innerHTML = '<p>Half of ' + num + ' is ' + result + '.</p>';
    return result;
}

function percentOf(num1, num2) {
    result = (num1 / num2) * 100;
    console.log(num1 + ' is ' + result + '% of ' + num2 + '.');
    solution.innerHTML = '<p>' + num1 + ' is ' + result + '% of ' + num2 + '.</p>';
    return result;
}

function areaOfCircle(radius) {
    result = Math.PI * radius * radius;
    roundedResult = roundTwoDecimals(result);
    console.log('The area for a circle with radius ' + radius + ' is ' + roundedResult + '.');
    solution.innerHTML = '<p>The area for a circle with radius ' + radius + ' is ' + roundedResult + '.</p>';
    return roundedResult;
}

function roundTwoDecimals(num) {
    var roundedThree = num - (num % 0.001);
    var roundedTwo = num - (num % 0.01);
    var thirdDigit = roundedThree % 0.01;
    if (thirdDigit >= 0.005) {
        roundedTwo += 0.01;
    }
    return roundedTwo;
}

//buttons
var squareButton = document.getElementById('square-button');

var halfButton = document.getElementById('half-button');

var percentButton = document.getElementById('percent-button');

var areaButton = document.getElementById('area-button');

//event listeners
squareButton.addEventListener('click', function() {
    var squareInput = document.getElementById('square-input').value;
    squareNumber(squareInput);
});

halfButton.addEventListener('click', function() {
    var halfInput = document.getElementById('half-input').value;
    halfNumber(halfInput);
});

percentButton.addEventListener('click', function() {
    var percentOneInput = document.getElementById('percent1-input').value;
    var percentTwoInput = document.getElementById('percent2-input').value;
    percentOf(percentOneInput, percentTwoInput);
});

areaButton.addEventListener('click', function() {
    var areaInput = document.getElementById('area-input').value;
    areaOfCircle(areaInput);
});


var solution = document.getElementById('solution');

