const menubtn = document.querySelector("#menubtn");
const mobilemenu = document.querySelector("#mobilemenu");

menubtn.addEventListener('click',() => {
  if (mobilemenu.classList.contains("-translate-y-full")) {
    mobilemenu.classList.toggle("-translate-y-0");
    mobilemenu.classList.toggle("-translate-y-full");
          
    menubtn.innerHTML='X'
} else {
    mobilemenu.classList.toggle("-translate-y-0");
    mobilemenu.classList.toggle("-translate-y-full");
    
    menubtn.innerHTML='&#9776;'
  }
});
