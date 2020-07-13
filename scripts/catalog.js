var menu_elements = document.querySelectorAll(".element");
var lines_cards = document.querySelectorAll(".line");
var categorys = document.querySelectorAll(".categorys");
var cards = document.querySelectorAll(".card");

var photo = document.getElementById("photo");
var desc = document.getElementById("desc");

var cat1 = document.getElementById("1");
var cat2 = document.getElementById("2");
var cat3 = document.getElementById("3");

var dir_klasika = "../assets/catalog/klasika/"
var dir_kovka = "../assets/catalog/kovka/"
var dir_decor = "../assets/catalog/decor/"
var dir_prof = "../assets/catalog/prof/"


var numeric_PNG = [0,1,0,2,0,3,0,4,0,5,0];
var dirs = [dir_klasika,dir_kovka,dir_decor,dir_prof];

function changePage(categ) {
    if( categ === "go_main"){
        document.location.href = "../index.html";

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

function set_datas(categ) {
    
    var swich = 0;

lines_cards.forEach(line => {

  

    for (var i = 1; i < 10; i++) {
      //  console.log(line.childNodes[i]);
        line.childNodes[i].style.backgroundImage = "url(" + dirs[swich] + categ + numeric_PNG[i] + ".png)"

        i++;
    }
 
    
    swich++;
    
});

}

function set_product(prod){
console.log(prod.dataset);
photo.style.backgroundImage = prod.style.backgroundImage;
desc.textContent = prod.dataset.desc;


}



window.onload = function () {

    
   set_datas("1");


cards.forEach(card => {

    

    card.addEventListener("click", function(){
      //  console.log(event.target.backgroundImage);
        set_product(event.target);
    
    });
    
});


  cat1.addEventListener("click", function(){
    set_datas(cat1.id);

});

cat2.addEventListener("click", function(){
    set_datas(cat2.id);

});

cat3.addEventListener("click", function(){
    set_datas(cat3.id);

});
    
    menu_elements.forEach(elem => {
        console.log("change page");
elem.addEventListener("click", function(){
    console.log(elem.id);
changePage(elem.id);

});


    });
}