let clickedBtnIndex = null;
let shownContent = null;

let buttons = Array.prototype.slice.call(document.querySelectorAll(".listBtns"));
let content = Array.prototype.slice.call(document.querySelectorAll(".contentBody"));

document.querySelector(".btn-group").addEventListener("click", function(event) {

    clickedBtnIndex = buttons.indexOf(event.target);

    if (event.target.classList.contains("listBtns")) {
        content.forEach(function(div) {
            if (!div.classList.contains("hidden") && div.classList.contains("hidden")) {
                shownContent = div;
            }
        });

        hideAll();

        if (content[clickedBtnIndex] === shownContent) {
            content[clickedBtnIndex].classList.add("hidden");
        } else {
            content[clickedBtnIndex].classList.remove("hidden");
        }
        clickedBtnIndex = buttons.indexOf(event.target);
    }

});

function hideAll() {
    content.forEach(function(div) {
        div.classList.add("hidden");
    });
}