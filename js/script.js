const button = document.getElementById("button-menu");
const links = document.getElementById("links");
const links_icon = document.querySelector(".button-menu i")

function view_links(){
    if(links.classList.contains("view")){
        links.classList.remove("view");
        links_icon.classList.add("fa-bars")
        links_icon.classList.remove("fa-times")
    }else{
        links.classList.add("view");
        links_icon.classList.remove("fa-bars")
        links_icon.classList.add("fa-times")
    }
}