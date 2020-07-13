var div_kalitka = document.getElementById("kalitka");
var div_zabor = document.getElementById("zabor");
var div_vorota = document.getElementById("vorota");

var div_card1 = document.getElementById("1");
var div_card2 = document.getElementById("2");
var div_card3 = document.getElementById("3");
var div_card4 = document.getElementById("4");
var divs_cards = document.querySelectorAll(".card");
var menu_elements = document.querySelectorAll(".element");


var div_card_text1 = document.getElementById("text1");
var div_card_text2 = document.getElementById("text2");
var div_card_text3 = document.getElementById("text3");
var div_card_text4 = document.getElementById("text4");

var activeCategory = "vorota";

function changePage(categ) {
    if (categ === "zabor") {
        document.location.href = "../pages/catalog.html";
      
    }

    if (categ === "vorota") {
        document.location.href = "../pages/catalog.html";
    }

    if (categ === "kalitka") {
        document.location.href = "../pages/catalog.html";
    }

    if( categ === "contacts"){
        document.location.href = "../pages/contacts.html";

    }
    if( categ === "gallery"){

        document.location.href = "../pages/gallery.html";
    }
    if( categ === "catalog"){
        document.location.href = "../pages/catalog.html";

    }
};




function changeCategory(categ) {

    activeCategory = categ;

    div_card1.style.opacity = "0";
    div_card2.style.opacity = "0";
    div_card3.style.opacity = "0";
    div_card4.style.opacity = "0";

    setTimeout(() => {
        div_card1.style.backgroundImage = "url(../assets/index/" + categ + "1.png)";
        div_card2.style.backgroundImage = "url(../assets/index/" + categ + "2.png)";
        div_card3.style.backgroundImage = "url(../assets/index/" + categ + "3.png)";
        div_card4.style.backgroundImage = "url(../assets/index/" + categ + "4.png)";



    }, 200);

    setTimeout(() => {

        div_card1.style.opacity = "1";
        div_card2.style.opacity = "1";
        if (categ === "kalitka") {
            div_card3.style.opacity = "0";
        } else {
            div_card3.style.opacity = "1";

        }
        div_card4.style.opacity = "1";

        div_card_text3.textContent = "Декоративные"
        if (categ === "vorota") {
            div_card_text3.textContent = "Отдвижные"
        }
        if (categ === "kalitka") {
            div_card_text3.textContent = "Отдвижные"
        }




    }, 500);




}


window.onload = function () {

    div_kalitka.style.backgroundColor = "rgb(19, 19, 19)";
    div_vorota.style.backgroundColor = "rgb(19, 19, 19)";
    div_zabor.style.backgroundColor = "rgb(255, 38, 0)";
    changeCategory("zabor");

   

    menu_elements.forEach(elem => {
        console.log("change page");
elem.addEventListener("click", function(){
    console.log(elem.id);
changePage(elem.id);

});


    });

    divs_cards.forEach(card => {

        card.addEventListener("mouseover", function () {
            card.childNodes[1].style.height = "50%";
            // console.log(card.childNodes[1]);   

        });


        card.addEventListener("mouseout", function () {
            card.childNodes[1].style.height = "23%";
            // console.log(card.childNodes[1]);   

        });

        card.addEventListener("click", function () {
            changePage(activeCategory);

        });

    });



    div_kalitka.addEventListener("click", function () {

        div_kalitka.style.backgroundColor = "rgb(255, 38, 0)";
        div_vorota.style.backgroundColor = "rgb(19, 19, 19)";
        div_zabor.style.backgroundColor = "rgb(19, 19, 19)";
        changeCategory("kalitka");


    });

    div_zabor.addEventListener("click", function () {
        div_kalitka.style.backgroundColor = "rgb(19, 19, 19)";
        div_vorota.style.backgroundColor = "rgb(19, 19, 19)";
        div_zabor.style.backgroundColor = "rgb(255, 38, 0)";
        changeCategory("zabor");



    });


    div_vorota.addEventListener("click", function () {
        div_kalitka.style.backgroundColor = "rgb(19, 19, 19)";
        div_vorota.style.backgroundColor = "rgb(255, 38, 0)";
        div_zabor.style.backgroundColor = "rgb(19, 19, 19)";

        changeCategory("vorota");


    });









}