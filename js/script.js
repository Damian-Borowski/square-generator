const btn = document.querySelector("button"); 
let number = 1; // 
let activeNumber = 1;
const addElement = () => { 
    const box = document.createElement("div");
    box.textContent = number;
    if(activeNumber == 5){
        activeNumber = 0;
        box.classList.add("bonus");
    }
    document.body.appendChild(box);

    ++number; // 
    activeNumber++;
}; 


btn.addEventListener("click", addElement) 

