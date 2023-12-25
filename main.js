let berger = document.querySelector(".header i")
let navBar = document.querySelector(".container .header .nav")

berger.onclick = () => {
    if (navBar.style.display == "block") {
        navBar.style.display = "none"
    }else {
        navBar.style.display = "block"
    }
}

