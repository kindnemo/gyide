const menuBtn = document.querySelector("#show-menu");
const anchorsDiv = document.querySelector("#anchor-tag");
const anchors = document.querySelectorAll(".anchors");
const imgDiv = document.querySelector("#anchor-img-div");
const anchorImg = document.querySelector(".anchor-img");
const heroTxt = document.querySelectorAll(".hero-txt");
// Menu Variables

const slideShowImg = document.querySelectorAll(".slideshow-image");

let showTxtCounter = 0;
let slideShowCounter = 1;



// Shows the Hamburger Menu
function showMenu(){
    if(menuBtn.classList.contains("off")){
        anchorsDiv.style.transform = "translateX(0)";
        imgDiv.style.transform = "translateX(0)";
    }else{
        if(window.innerWidth <= 800){
            anchorsDiv.style.transform = "translateX(-100vw)";
        }else{
            anchorsDiv.style.transform = "translateX(-30vw)";
        }
        imgDiv.style.transform = "translateX(-100vw)";
    }
    menuBtn.classList.toggle("off");
}

// Changes image on hover over anchor tag
function changeImg(){
    let txt = this.textContent;
    if(txt == "Home"){
        anchorImg.src = "images/menu/home.jpg";
    }else if(txt == "Programs"){
        anchorImg.src = "images/menu/program.jpg";
    }else if(txt == "Contact"){
        anchorImg.src = "images/menu/contact.jpg";
    }else if(txt == "Products"){
        anchorImg.src = "images/menu/products.jpg";
    }
}

// Make hero text appear after a while 
function showTxt(){
    if(showTxtCounter >= heroTxt.length){
        return;
    }
    heroTxt[showTxtCounter].classList.add("opacity");
    showTxtCounter++;
    setTimeout(showTxt, 500);
}

// SLIDE SHOW FUNCTION
function slideShow(){
    console.log(slideShowCounter);
    if(slideShowCounter == 20){
        slideShowImg[slideShowCounter].classList.remove("opacity");
        slideShowCounter = 1;
        // return;
    }
    slideShowImg[slideShowCounter].classList.toggle("opacity");
    slideShowCounter++;
}

anchors.forEach(ele => ele.addEventListener("mouseenter", changeImg));
menuBtn.addEventListener("click", showMenu);
window.onload = setTimeout(showTxt, 1000);
window.onload = function () { //Moves the window to top on website reload
    window.scrollTo(0, 0);
  }

// setInterval(slideShow, 2000);