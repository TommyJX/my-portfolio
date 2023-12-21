const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")

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

/*-----------menu-----------*/
const sidemenu = document.getElementById("sidemenu")

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}

/*-----------sendDataToGoogleSheets-----------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbzZdGzf27KGJeibLdwWU6HdpxRdRm9J1S457joV9IUVM5Mgd3yTyyNMNGadFxysImk1lA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

/*-----------scroll-----------*/
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#006eff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;