const mainmenu = document.querySelector(".mainMenu");
const closemenu = document.querySelector(".closeMenu");
const openmenu = document.querySelector(".openMenu");

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  mainmenu.style.display = "flex";
  mainmenu.style.top = "0";
}

function close() {   
    mainmenu.style.top = "-100%";
  }

  document.querySelectorAll(".nav-links").forEach(n =>n.addEventListener('click',() =>{
    openmenu.classList.remove(show());
    closemenu.classList.remove(close());
  }))