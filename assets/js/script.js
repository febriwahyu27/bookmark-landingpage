// FEATURES
const link = document.getElementsByClassName("features-link");
const slider = document.querySelectorAll(".slide");

for( var i = 0; i < link.length; i++ ){
    link[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    
}
const menu = document.querySelector("#menu_features");
menu.addEventListener("click", function(e){
    const target = e.target;
    if( target.innerText == "Simple Bookmarking" ){
        document.querySelector("#img").src = "images/illustration-features-tab-1.svg";
        document.querySelector(".caption-tab h1").innerHTML = "Bookmark in one click";
        document.querySelector(".caption-tab p").innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    }

    if( target.innerText == "Speedy Searching" ){
        document.querySelector("#img").src = "images/illustration-features-tab-2.svg";
        document.querySelector(".caption-tab h1").innerHTML = "Intelligent search";
        document.querySelector(".caption-tab p").innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";

    }

    if( target.innerText == "Easy Sharing" ){
        document.querySelector("#img").src = "images/illustration-features-tab-3.svg";
        document.querySelector(".caption-tab h1").innerHTML = "Share your bookmarks";
        document.querySelector(".caption-tab p").innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    }
})

// FREQUENTLY
const img = document.querySelectorAll(".faq svg");

img.forEach(function(img) {
    img.addEventListener("click", function(e) {
        const target = e.target;
        target.parentElement.classList.toggle("open-answer");
        // target.lastChild.setAttribute("stroke", "red");
    });
});

// INPUT CONTACT
const btn = document.querySelector(".contact button");

btn.addEventListener("click", (event) => {
    function validateEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    var input = document.querySelector(".contact input").value;
    if (validateEmail(input)) {
        alert("Email valid");
        document.querySelector(".contact form .box").style.backgroundColor = "hsl(231, 69%, 60%)";
        document.querySelector(".contact form .box p").style.display = "none";
        document.querySelector(".contact input").value = "";

    } else {
        document.querySelector(".contact form .box").style.backgroundColor = "hsl(0, 94%, 66%)";
        document.querySelector(".contact form .box p").style.display = "block";
    }
    event.preventDefault();
})

// MENU 
const navSide = document.querySelector("#humburger");
navSide.addEventListener("click", () =>{
    document.querySelector(".navbar-side").style.display = "block";
});

// MENU CLOSE
const close = document.querySelector("#close");
close.addEventListener("click", () =>{
    document.querySelector(".navbar-side").style.display = "none";
})