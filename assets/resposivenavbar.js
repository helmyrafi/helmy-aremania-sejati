// toogle responsive navbar
window.onscroll = function() { stickyNavbar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function responsiveTopNavBar() {
    let responsiveNavBar = document.getElementById("myTopnav");
    if (responsiveNavBar.className === "topnav") {
        responsiveNavBar.className += " responsive";
    } else {
        responsiveNavBar.className = "topnav";
    }
}

function toggleDropDown(id) {
    let dropDownButton = document.getElementById(id);
    document.querySelectorAll(".dropdown-content.on").forEach(function(elemen) {
        if (elemen !== dropDownButton) elemen.classList.remove("on");
    });
    dropDownButton.classList.toggle("on");
}