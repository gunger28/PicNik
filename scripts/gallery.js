var menu_elements = document.querySelectorAll(".element");
var photoes_divs = document.querySelectorAll(".photo");
var photo_window = document.getElementById("photo_window");


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

function open_photo(){



}


window.onload = function () {

    photoes_divs.forEach(photo => {


        photo.addEventListener("click", function(){

            photo_window.style.zIndex = "100";
            photo_window.style.opacity = "1";
            var img = event.target.style.backgroundImage;
            console.log(img);
            
            photo_window.childNodes[1].style.backgroundImage = img;


        });
        
    });
    
    photo_window.addEventListener("click", function(){

        photo_window.style.zIndex = "0";
            photo_window.style.opacity = "0";


    });
 
    menu_elements.forEach(elem => {
        console.log("change page");
        
elem.addEventListener("click", function(){
    console.log(elem.id);
changePage(elem.id);

});


    });
}