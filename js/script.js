
//working on the bars icon to show the navbar's lists

const lists = document.querySelector(".lists");
const barsIcon = document.querySelector(".menu");
const listsChild = document.querySelectorAll(".lists li a");
barsIcon.addEventListener("click", () => {
    lists.classList.toggle('show');
    barsIcon.classList.toggle('fa-close');
})




// adding style to the header when scroll
document.onscroll = () => {

    //remove the navbar's lists rightaway after clicking on the lists
    lists.classList.remove('show');
    barsIcon.classList.remove('fa-close');
    if(window.scrollY > 0){
        document.querySelector("header").classList.add("active");
    }else{
        document.querySelector("header").classList.remove("active");
    }
}

// adding the previous style to the header ,but this time onload
document.onload = () => {
    if(window.scrollY > 0){
        document.querySelector("header").classList.add("active");
    }else{
        document.querySelector("header").classList.remove("active");
    }
}
