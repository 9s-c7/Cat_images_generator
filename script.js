
function gencat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex_cat_gen');
    image.src="https://cdn2.thecatapi.com/images/7e.gif";
    div.appendChild(image);
}

function reset(){
    document.getElementById('flex_cat_gen').innerHTML="";
}