// * get the hamburger element from the screen
let hamburger = document.querySelector("#hamburger");
// * add a click event and have it call hamburgerClick on the click event
hamburger.addEventListener("click",hamburgerClick);

// * this function checks to see what the source attribute is and switches between static and animated
function hamburgerClick(e){
    let burg= e.target;
    if(burg.getAttribute("src")=="menu_bw_static.gif"){
        burg.setAttribute("src", "menu_bw.gif");
    }else{
        burg.setAttribute("src", "menu_bw_static.gif");
    }
};