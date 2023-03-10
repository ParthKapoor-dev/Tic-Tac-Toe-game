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
const container = document.querySelector(".main-game-container");
const restart = document.querySelector(".restart");
let objectClicked = {
    "element-11": "A",
    "element-12": "A",
    "element-13": "A",
    "element-21": "A",
    "element-22": "A",
    "element-23": "A",
    "element-31": "A",
    "element-32": "A",
    "element-33": "A",
}

restart.addEventListener("click",()=>{
    objectClicked = {
        "element-11": "A",
        "element-12": "A",
        "element-13": "A",
        "element-21": "A",
        "element-22": "A",
        "element-23": "A",
        "element-31": "A",
        "element-32": "A",
        "element-33": "A",
    }

    element11.innerText = "A";
    element12.innerText = "A";
    element13.innerText = "A";
    element21.innerText = "A";
    element22.innerText = "A";
    element23.innerText = "A";
    element31.innerText = "A";
    element32.innerText = "A";
    element33.innerText = "A";
})
// const varToString = (varObj)=> Object.keys(varObj)[0];
function O(object)
{
    let index;
    const keys = Object.keys(object);
    do{
        index = Math.floor(Math.random()*keys.length);
    } while(object[keys[index]] != "A");   
    object[keys[index]] = "O";
    console.log(keys[index], object[keys[index]]);
    if(keys[index] == "element-11")
        element11.innerText = "O";
    if(keys[index] == "element-12")
        element12.innerText = "O";
    if(keys[index] == "element-13")
        element13.innerText = "O";
    if(keys[index] == "element-21")
        element21.innerText = "O";
    if(keys[index] == "element-22")
        element22.innerText = "O";
    if(keys[index] == "element-23")
        element23.innerText = "O";
    if(keys[index] == "element-31")
        element31.innerText = "O";
    if(keys[index] == "element-32")
        element32.innerText = "O";
    if(keys[index] == "element-33")
        element33.innerText = "O"; 

    
}





// container.addEventListener("click",(event)=>{
//     if( event.target == element11 || event.target == element12 || event.target == element13 || event.target == element21 || event.target == element22 || event.target == element23 || event.target == element31 || event.target == element32 || event.target == element33 )
//     {
//         a = event.target;
        
//         event.target.innerText = "X";
//         objectClicked[varToString({a})] = "X";
//         console.log(objectClicked);
//     }
//     console.log(event.target);

// }
// )

element11.addEventListener("click",(e)=>{
    e.target.innerText = "X";
    objectClicked["element-11"] = "X";
    console.log(objectClicked);
    O(objectClicked);
})
element12.addEventListener("click",(e)=>{
    e.target.innerText = "X";
    objectClicked["element-12"] = "X";
    console.log(objectClicked);
    O(objectClicked);
})
element13.addEventListener("click",(e)=>{
    e.target.innerText = "X";
    objectClicked["element-13"] = "X";
    console.log(objectClicked);
    O(objectClicked);
})
element21.addEventListener("click",(e)=>{
    e.target.innerText = "X";
    objectClicked["element-21"] = "X";
    console.log(objectClicked);
    O(objectClicked);
})
element22.addEventListener("click",(e)=>{
    e.target.innerText = "X";
    objectClicked["element-22"] = "X";
    console.log(objectClicked);
    O(objectClicked);
})
element23.addEventListener("click",(e)=>{
    e.target.innerText = "X";
    objectClicked["element-23"] = "X";
    console.log(objectClicked);
    O(objectClicked);
})
element31.addEventListener("click",(e)=>{
    e.target.innerText = "X";
    objectClicked["element-31"] = "X";
    console.log(objectClicked);
    O(objectClicked);
})
element32.addEventListener("click",(e)=>{
    e.target.innerText = "X";
    objectClicked["element-32"] = "X";
    console.log(objectClicked);
    O(objectClicked);
})
element33.addEventListener("click",(e)=>{
    e.target.innerText = "X";
    objectClicked["element-33"] = "X";
    console.log(objectClicked);
    O(objectClicked);
})