document.addEventListener("DOMContentLoaded", ()=>{
    let numbers = document.getElementById("numbers");

}) 
function clearContent(){
    console.log("Works");
    let numbers = document.getElementById("numbers");
    numbers.textContent = "";
     let result = document.getElementById("result");
     result.textContent = "";
    
}

function addContent(e){
    let number = e.textContent;
    let numbers = document.getElementById("numbers");
    if (numbers.textContent == ""){
        numbers.textContent = number;
    }
    else{
        numbers.textContent += number;
    }
}

function resultOfContent(){
    let numbers = document.getElementById("numbers");
     let result = document.getElementById("result");
     result.textContent = `=${eval(numbers.textContent)}`;
     numbers.textContent = "";
}

var tema = "gara"

function changetheme(e){
    const rootElement = document.documentElement;
    const white = getComputedStyle(rootElement).getPropertyValue('--white');
    const black = getComputedStyle(rootElement).getPropertyValue('--black')
    if (tema == 'gara'){
        rootElement.style.setProperty("--white", "black");
        rootElement.style.setProperty("--black", 'white');
        rootElement.style.setProperty("--ccc", "#333");
        rootElement.style.setProperty("--333", '#ccc');
        tema = 'ak';
        e.textContent = "Gara tema";
    }
    else{
        rootElement.style.setProperty("--white", "white");
        rootElement.style.setProperty("--black", 'black');
        rootElement.style.setProperty("--ccc", "#ccc");
        rootElement.style.setProperty("--333", '#333');
        tema = 'gara';
         e.textContent = "Ak tema";
    }
        
}

