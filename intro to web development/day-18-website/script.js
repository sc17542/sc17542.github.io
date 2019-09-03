var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var fifth = document.getElementById('fifth');

var sameElementsButton = document.getElementById('same-elements-button');
var firstIdButton = document.getElementById('first-id-button');
var secondIdButton = document.getElementById('second-id-button');
var thirdIdButton = document.getElementById('third-id-button');
var fourthIdButton = document.getElementById('fourth-id-button');
var fifthIdButton = document.getElementById('fifth-id-button');

function sameElements(element) {
    var elements = document.getElementsByTagName(element);
    var elementAmount = elements.length;
    alert('There are ' + elementAmount + ' <' + element + '> tags on this page.');
}

sameElementsButton.addEventListener('click', function() {
    var sameElementsInput = document.getElementById('same-elements-input').value;
    sameElements(sameElementsInput);
})

function firstId() {
    var firstChildren = first.children;
    var firstChildrenAmount = first.children.length;
    alert('There are ' + firstChildrenAmount + ' elements inside the first ID.');
}

firstIdButton.addEventListener('click', function() {
    firstId();
})

function secondId() {
    var secondChildren = second.children;
    var secondChildrenAmount = second.children.length;
    alert('There are ' + secondChildrenAmount + ' elements inside the second ID.');
}

secondIdButton.addEventListener('click', function() {
    secondId();
})

function thirdId() {
    var thirdChildren = third.children;
    var thirdChildrenAmount = third.children.length;
    alert('There are ' + thirdChildrenAmount + ' elements inside the third ID.');
}

thirdIdButton.addEventListener('click', function() {
    thirdId();
})

function fourthId() {
    var fourthChildren = fourth.children;
    var fourthChildrenAmount = fourth.children.length;
    alert('There are ' + fourthChildrenAmount + ' elements inside the fourth ID.');
}

fourthIdButton.addEventListener('click', function() {
    fourthId();
})

function fifthId() {
    var fifthChildren = fifth.children;
    var fifthChildrenAmount = fifth.children.length;
    alert('There are ' + fifthChildrenAmount + ' elements inside the fifth ID.');
}

fifthIdButton.addEventListener('click', function() {
    fifthId();
})