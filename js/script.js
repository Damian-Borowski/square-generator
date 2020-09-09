const btn = document.querySelector("button"); //nasluchiwanie elementu button
let number = 1; // 
let activeNumber = 1;
const addElement = () => {  //funkcja 
    const box = document.createElement("div"); //tworzymy element div
    box.textContent = number; //przypisujemy numer do elementu
    if(activeNumber == 5){
        activeNumber = 0;
        box.classList.add("bonus");
    }
    document.body.appendChild(box); //dodajemy go w sekcji body

    ++number; // zwiekszamy numer
    activeNumber++;
}; 


btn.addEventListener("click", addElement) // nasluchiwanie na click

