const navbar = document.querySelector(".navbar");
window.onscroll = () =>{
    if (window.pageYOffset >=(navbar.offsetTop) ) {
        
        navbar.classList.add("sticky-nav");
        navbar.classList.remove("default-nav");
      } else {
        navbar.classList.remove("sticky-nav");
        navbar.classList.add("default-nav");
      }

};



