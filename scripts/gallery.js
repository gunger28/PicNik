var menu_elements = document.querySelectorAll(".element");

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




window.onload = function () {

    
 
    menu_elements.forEach(elem => {
        console.log("change page");
        
elem.addEventListener("click", function(){
    console.log(elem.id);
changePage(elem.id);

});


    });
}