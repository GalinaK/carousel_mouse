var pictures = new Array('1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'); //images for carousel
var items = pictures.length;    //length of array
var angels = new Array(items); // angles for each picture
var rx = 300; // x radius
var ry = 10; // y radius
var handle;

// location of the picture in the circle
function initCar() {
    var content = document.getElementById('content');
    for (var i = 0; i < items; i++) {


        angels[i] = ((Math.PI * 2) / items) * i; //calculat angle
        var xpos = Math.cos(angels[i]) * rx; //calculation of x-coordinate
        var ypos = Math.sin(angels[i]) * ry; //calculation of y-coordinate
        var obj = newObj(i, xpos, ypos, parseInt(ypos), pictures[i]);
        content.innerHTML += obj;


    }

    var el = document.getElementById("content");
    el.onmouseover = over;
    el.onmouseout = out;
    function over() {

        handle = setInterval('rotateCar()', 50);
    
    }

    function out() {
        clearInterval(handle);
        setTimeout('rotateCar()', 500);

    }


}
function rotateCar() {
    for (var i = 0; i < items; i++) {
        angels[i] += 0.008; // in radians
        var xpos = Math.cos(angels[i]) * rx;
        var ypos = Math.sin(angels[i]) * ry;
        var obj = document.getElementById('obj' + i); 
        obj.style.left = xpos + 'px';
        obj.style.top = ypos + 'px';
        obj.style.zIndex = parseInt(ypos);


    }

}
// template for each image in carousel

function newObj(id, x, y, z, src) {
    return '<div id="obj' + id + '"style="position:absolute; left:' + x + 'px; top:' + y + 'px; z-index:' + z + '; width:100px; "><img id="img' + id + '" src="' + src + '"/></div>';
}

