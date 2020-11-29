window.onscroll = changePos;

function changePos() {
    var header = document.getElementsByClassName("caption1")[0];
    if (window.pageYOffset > ((window.innerHeight / 2) - 5)) {
        header.style.position = "fixed";
        header.style.top = "18px";
        header.style.letterSpacing = "10px";
    } else {
        header.style.position = "";
        header.style.top = "";
        header.style.padding = "";
    }
}