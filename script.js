
function menu(){
  let m=document.querySelector(".side-navbar");
  m.style.left="0";
}


document.querySelector("#close-btn").addEventListener("click",()=>{
  let c=document.querySelector(".side-navbar");
  c.style.left="-60%";
})