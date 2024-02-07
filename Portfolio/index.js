let aboutLinks = document.getElementsByClassName("about_links");

let aboutContents = document.getElementsByClassName("about_contents");

function openContent(contentName) {

    for(aboutLink of aboutLinks) {
        aboutLink.classList.remove("active_link");
    }

    for(aboutContent of aboutContents) {
        aboutContent.classList.remove("active_content");
    }

    event.currentTarget.classList.add("active_link");
    document.getElementById(contentName).classList.add("active_content");
}


// Side Menu

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}