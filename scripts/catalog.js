

var menu_elements = document.querySelectorAll(".element");
var lines_cards = document.querySelectorAll(".line");
var categorys = document.querySelectorAll(".categorys");
var cards = document.querySelectorAll(".card");

var photo = document.getElementById("photo");
var desc = document.getElementById("desc");
var title = document.getElementById("T3");
var last_block = document.getElementById("last_block");


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

    last_block.style.opacity = "1";
    if(categ === "3"){

        title.textContent = "Из профнастила"
        last_block.style.opacity = "0";

  
       

    }else{

        title.textContent = "Декоративные"
      
    }

    if(categ === "2"){

        title.textContent = "Отдвижные"
    }

    anim_change_cards_category();
    setTimeout(() => {
lines_cards.forEach(line => {

    
        for (var i = 1; i < 10; i++) {
            //  console.log(line.childNodes[i]);
            
              line.childNodes[i].style.backgroundImage = "url(" + dirs[swich] + categ + numeric_PNG[i] + ".png)"
     
              i++;
            
          }
   

    
 
    
    swich++;
    
});
}, 600);
}

function set_product(prod){


photo.style.opacity = "0";
  desc.style.opacity = "0";
  
  setTimeout(() => {

    photo.style.backgroundImage = prod.style.backgroundImage;
    desc.textContent = prod.dataset.desc;

 
  }, 500);

  setTimeout(() => {


    photo.style.opacity = "1";
    desc.style.opacity = "1";
  }, 800);

}

function anim_disable_categ(target){

    target.style.backgroundColor = "rgb(34, 34, 34)";
    target.style.marginLeft = "53%";


}

function anim_change_cards_category(){

    

    cards.forEach(card => {
      //  card.style.top = "-100%";
card.style.transform = "translateY(-115%)";
        
setTimeout(() => {
    card.style.transform = "translateY(0%)";
    card.style.transform = "";
}, 700);

    });

    

}

function scroll_to_buy(){

    var to_buy_panel = document.getElementById("trigger");

    to_buy_panel.scrollIntoView({ 

        behavior: "smooth",
        block: "start",
        inline:"nearest"

    });
}

function scroll_to_catalog(){

    var catalog = document.getElementById("T1");

    catalog.scrollIntoView({ 

        behavior: "smooth",
        block: "start",
        inline:"nearest"

    });
}

console.log(choosed_category);


window.onload = function () {

    if(choosed_category === "zabor"){

        set_datas("1");

    }
    if(choosed_category === "vorota"){

        set_datas("2");

    }
    if(choosed_category === "kalitka"){

        set_datas("3");

    }
   


cards.forEach(card => {

    

    card.addEventListener("click", function(){
      //  console.log(event.target.backgroundImage);
      scroll_to_buy();
        set_product(event.target);
    
    });
    
});



  cat1.addEventListener("click", function(){
    set_datas(cat1.id);
    scroll_to_catalog();

cat1.style.backgroundColor = "rgb(255, 60, 0)";
cat1.style.marginLeft = "43%";

  
anim_disable_categ(cat2);
anim_disable_categ(cat3);
});

cat2.addEventListener("click", function(){
    set_datas(cat2.id);
    scroll_to_catalog();

    cat2.style.backgroundColor = "rgb(255, 60, 0)";
cat2.style.marginLeft = "43%";
  
anim_disable_categ(cat1);
anim_disable_categ(cat3);

});

cat3.addEventListener("click", function(){
    set_datas(cat3.id);
    scroll_to_catalog();

    cat3.style.backgroundColor = "rgb(255, 60, 0)";
cat3.style.marginLeft = "43%";
  
anim_disable_categ(cat1);
anim_disable_categ(cat2);
    
});
    
    menu_elements.forEach(elem => {
        console.log("change page");
elem.addEventListener("click", function(){
    console.log(elem.id);
changePage(elem.id);

});


    });
}