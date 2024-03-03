console.log("js is ready");

let elSaveMovie = document.getElementById("fmSaveMovie");
let elGetMovie = document.getElementById("getMovie");
let elDvShowMovie = document.getElementById("showMovie");
let btnSaveMovie = document.getElementById("saveMovie");

//make array
let arrMovie = [];
console.log(arrMovie.length);


//Object Constructor notation = super variable

function Movie(title, director, year, comment){

    //Map the input properties of this object
    this.title = title;
    this.director = director;
    this.year = year;
    this.comment = comment;

    //Define a Method(new commeand) to calculate how old this movie is

    this.getMovieAge = function() {
        let currentYear = new Date();

        console.log("current yerar" + currentYear);
        
        return currentYear.getFullYear() - this.year; //subtract the year
    }; 

}; //End List



function fnDoSave(event){
    event.preventDefault();//Stop the refresh of the foRm
    console.log("fnDoSave() is running");

    //Note: using One let command to create multiple objects at once
    let valmovieTitle   = document.getElementById("movieTitle").value, 
        valmovieDirtor  = document.getElementById("movieDirector").value;
        valmovieYear    = document.getElementById("movieYear").value;
        valmovieCommt   = document.getElementById("movieCommt").value;

        console.log(valmovieTitle, valmovieDirtor, valmovieYear, valmovieCommt);

        //Bundle all that seperate data into one object
        let tmpMovie = new Movie(valmovieTitle, valmovieDirtor, valmovieYear, valmovieCommt);

        console.log("I just watched this : " + tmpMovie.getMovieAge());

        //Clear the  form
        elSaveMovie.reset();
        
        //Give feedback
        window.alert("it is reseted");
        
        //save this latest movie to the attay
        arrMovie.push(tmpMovie);
        console.log("Total movies :" + arrMovie.length + "All movies :" + arrMovie);
        // END foDoSave


    };


function fnDoGet(event){
    event.preventDefault();//Stop the refresh of the form
    console.log("fnDoGetget() is running");

    //Pick a random movie from array
    let tmpRandomNum = Math.floor(Math.random() * arrMovie.length); 
    console.log("random number is " + tmpRandomNum);
    console.log("That movie is " + arrMovie[tmpRandomNum].title);

    elDvShowMovie.innerHTML = "<p class='showmovie'> Movie list : <br> " + "Titel : " + arrMovie[tmpRandomNum].title + " <br> Director : " + arrMovie[tmpRandomNum].director + "<br> Year : " + arrMovie[tmpRandomNum].year + " <br> This movie on screen "  + arrMovie[tmpRandomNum].getMovieAge() + " years ago  </p>"

    //show result
};




//Event Listner
btnSaveMovie.addEventListener("click", function(event){fnDoSave(event);});
elGetMovie.addEventListener("click", function(event){fnDoGet(event);});



// //Star rating Start 

// function Rating() {};
// 	Rating.prototype.rate = 0;
// 	Rating.prototype.setRate = function(newrate) {
// 		//별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
// 		this.rate = newrate;
// 		let items = document.querySelectorAll('.rate_radio');
// 		items.forEach(function(item, idx) {
// 			if (idx < newrate) {
// 				item.checked = true;
// 			} else {
// 				item.checked = false;
// 			}
// 		});
// 	}
// 	let rating = new Rating(); //별점 인스턴스 생성

// 	document.addEventListener('DOMContentLoaded', function() {
// 		//별점선택 이벤트 리스너
// 		document.querySelector('.rating').addEventListener('click', function(e) {
// 			let elem = e.target;
// 			if (elem.classList.contains('rate_radio')) {
// 				rating.setRate(parseInt(elem.value));
// 			}
// 		})
// 	});



    //Star rarting END


    //Event Liteners
//Listen to the moment of interction


