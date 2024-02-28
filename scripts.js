console.log("js is ready");

let elSaveMovie = document.getElementById("saveMovie");
let elGetMovie = document.getElementById("getMovie");
let elShowMovie = document.getElementById("showMovie");

//make array
let arrMovie = [];


function fnDoSave(event){
    event.preventDefault();//Stop the refresh of the foRm
    console.log("fnDoSave() is running");
};
function fnDoGet(event){
    event.preventDefault();//Stop the refresh of the form
    console.log("fnDoGetget() is running");
};

//Event Liteners
//Listen to the moment of interction
elSaveMovie.addEventListener("submit", function(event){fnDoSave(event);});
elGetMovie.addEventListener("click", function(event){fnDoGet(event);});