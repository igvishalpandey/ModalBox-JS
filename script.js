const popup= document.querySelector(".popup");
const btn= document.querySelector(".btn");
const btn_ok = document.getElementById("btn-ok");


btn_ok.addEventListener('click',()=>{
    popup.classList.remove("open-popup");
});


btn.addEventListener('click', ()=>{
    popup.classList.add("open-popup");
});
