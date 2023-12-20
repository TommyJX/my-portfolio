const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")
let mybutton = document.getElementById("myBtn")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")

    document.getElementById(tabname).classList.add("active-tab")
}

/*-----------scroll-----------*/
window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none"
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0
}