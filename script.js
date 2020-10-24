let oldScrollPos = window.pageYOffset;
window.onscroll = function() {
    let newScrollPos = window.pageYOffset;
    if (oldScrollPos > newScrollPos) {
        document.getElementById("grid-header").style.top = "0";
    }
        else {
            document.getElementById("grid-header").style.top = "-100px";
        }
        oldScrollPos = newScrollPos;
}