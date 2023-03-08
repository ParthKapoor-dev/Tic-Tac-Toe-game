const element11 = document.querySelector(".element-1-1");
const element12 = document.querySelector(".element-1-2");
const element13 = document.querySelector(".element-1-3");
const element21 = document.querySelector(".element-2-1");
const element22 = document.querySelector(".element-2-2");
const element23 = document.querySelector(".element-2-3");
const element31 = document.querySelector(".element-3-1");
const element32 = document.querySelector(".element-3-2");
const element33 = document.querySelector(".element-3-3");

const allElements = document.querySelectorAll(".ele");
const container = document.querySelector(".onlyObjects");

container.addEventListener("click",(event)=>{
    event.target.innerText = "X";

}
)
