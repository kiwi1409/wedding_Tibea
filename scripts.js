window.onscroll = changePos;

function changePos() {
    var header = document.getElementById("main-section");
    if (window.pageYOffset > ((window.innerHeight / 2) - 5)) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.padding = "18px";
        header.style.letterSpacing = "10px";
        header.style.left = "35.4%";
    } else {
        header.style.position = "";
        header.style.top = "";
        header.style.padding = "";
    }
}