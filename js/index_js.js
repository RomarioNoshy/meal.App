$('.toggle-menu').click(function () {
    $('.links').toggle(1000);
    
})










//---------Api--------
let myData;
let myHttp = new XMLHttpRequest();

myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef");

myHttp.send();

myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4) {
        myData = JSON.parse(myHttp.response).meals
        displayData();

    }
})

function displayData() {
    var hasala = ``;
    for (var i = 0; i < myData.length; i++) {
        hasala += `<div class="col-md-3 mb-4">
        <div class="img text-center">
          <img class="img-fluid" src="${myData[i].strMealThumb}" alt="">
          <div class="overlay ps-2">
            <h2>${myData[i].strMeal}</h2>
          </div>
          </div>
        </div>`
    }

    document.querySelector(".row").innerHTML = hasala
}




//----------search----------

$('#Search').click(function () {
    var searchBox = ` <div class="inputs d-flex justify-content-center flex-row text-center">
    <input class="form-control bg-dark text-white w-25 me-3" type="search" placeholder="Search By Name">
    <input class="form-control bg-dark text-white w-25 " type="search" placeholder="Search By First Letter">
  </div>`;
    document.querySelector(".row").innerHTML = searchBox
})

// function getCategory() {
//     var categoriesBox = ``;
//     for (var i = 0; i < myData.length; i++) {
//         categoriesBox += `<div class="col-md-3 mb-4">
//         <div class="img text-center">
//           <img class="img-fluid" src="${myData[i].strCategoryThumb}" alt="">
//           <div class="overlay ps-2">
//             <h2>${myData[i].strCategory}</h2>
//             <p>${myData[i].strCategoryDescription}</p>
//           </div>
//           </div>
//         </div>`
//     }
//     document.querySelector(".row").innerHTML = categoriesBox
// }




//---------category----------

$('#Categories').click(function () {
    var myHttp = new XMLHttpRequest();

    myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/categories.php");

    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4) {
            myData = JSON.parse(myHttp.response).categories
            getCategory();

        }
    })
})

function getCategory() {
    var categoriesBox = ``;
    for (var i = 0; i < myData.length; i++) {
        categoriesBox += `<div class="col-md-3 mb-4">
        <div class="img text-center">
          <img class="img-fluid" src="${myData[i].strCategoryThumb}" alt="">
          <div class="overlay ps-2">
            <h2>${myData[i].strCategory}</h2>
            <p>${myData[i].strCategoryDescription}</p>
          </div>
          </div>
        </div>`
    }
    document.querySelector(".row").innerHTML = categoriesBox
}







// ----------- area----------

$('#Area').click(function () {
    var myHttp = new XMLHttpRequest();

    myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/list.php?a=list");

    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4) {
            myData = JSON.parse(myHttp.response).meals
            area();

        }
    })
})
// --------areaFunction-------------
function area() {
    var areaBox = ``;
    for (var i = 0; i < myData.length; i++) {
        areaBox += `<div class="col-md-3 mb-4">
        <div class="img text-center">
        <i class="fa-solid fa-city text-white fa-2xl "></i>
          
            <h2 class="text-white">${myData[i].strArea}</h2>
            
          
          </div>
        </div>`
    }
    document.querySelector(".row").innerHTML = areaBox
}

//----------Ingredients----------
$('#Ingredients').click(function () {
    var myHttp = new XMLHttpRequest();

    myHttp.open("GET", "https://www.themealdb.com/api/json/v1/1/list.php?i=list");

    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4) {
            myData = JSON.parse(myHttp.response).meals
            Ingredients();
            
        }
    })
})
// --------IngredientsFunction-------------
function Ingredients() {
    var IngredientsBox = ``;
    for (var i = 0; i < myData.length; i++) {

        IngredientsBox += `<div class="col-md-3 mb-4">
        <div class="img text-center">
        <i class="fa-solid fa-bowl-food text-white fa-2xl"></i>
            <h2 class="text-white">${myData[i].strIngredient}</h2>
            <p class="text-white ">${myData[i].strDescription}</p>
          
          </div>
        </div>`


    }
    document.querySelector(".row").innerHTML = IngredientsBox
}

//-----contactUs-------

$('#Contact_Us').click(function () {
    var contactBox = `<div class="contact d-flex flex-column justify-content-center align-items-center ">
    <h2 class="text-white">ContacUs...</h2>
    <div class="content_inputs d-flex flex-row flex-wrap justify-content-center">
    <div class="col-md-6">
          <input class="form-control bg-dark text-white  mb-3" type="text" placeholder="Enter your Name">
         </div>
         <div class="col-md-6">
          <input class="form-control bg-dark text-white  mb-3" type="text" placeholder="Enter Email">
         </div>

         <div class="col-md-6">
          <input class="form-control bg-dark text-white  mb-3" type="text" placeholder="Enter Phone">
         </div>

         <div class="col-md-6">
          <input class="form-control bg-dark text-white  mb-3" type="text" placeholder="Enter Age">
         </div>

         <div class="col-md-6">
          <input class="form-control bg-dark text-white  mb-3" type="text" placeholder="Enter Password">
         </div>

         <div class="col-md-6">
          <input class="form-control bg-dark text-white  mb-3" type="text" placeholder="Enter RePassword">
         </div>
         </div>

    <button class="btn btn-danger disabled">Submit</button>
 </div>`;
    document.querySelector(".row").innerHTML = contactBox
})