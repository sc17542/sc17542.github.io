var cat = document.getElementById('cat');
var hat = document.getElementById('hat');

function placeHat() {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
//    console.log(mouseX + ', ' + mouseY);
    
    newHatTop = window.pageYOffset + mouseY - 59;
    newHatLeft = window.pageXOffset + mouseX - 75;
    hat.style.top = newHatTop + 'px';
    hat.style.left = newHatLeft + 'px';
}

cat.addEventListener('click', function() {
    placeHat();
});



var drawSurface = document.getElementById('draw-surface');

function draw() {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    newDrawTop = window.pageYOffset + mouseY - 2;
    newDrawLeft = window.pageXOffset + mouseX - 2;
    
    drawSurface.innerHTML += '<div style="width: 4px; height: 4px; background-color: black; position: absolute; top: ' + newDrawTop + 'px; left: ' + newDrawLeft + 'px;"></div>';
    
    drawSurface.style.top = newDrawTop + 'px';
    drawSurface.style.left = newDrawLeft + 'px';
}


drawSurface.addEventListener('mousedown', function() {
    drawSurface.addEventListener('mousemove', function() {
        draw();
    })
})


var clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function() {
    drawSurface.innerHTML = '<img id="white-cat" style="width: 500px;" src="images/white-cat.jpeg" alt="White cat">' + '<div style="width: 2px; height: 2px; background-color: black; position: absolute;"></div>';
})
