let text : string = "one";
let squareSizeNumber : number = 100;
let squareSize : string = `${ squareSizeNumber }px`;
let div : Element = document.createElement('div');
let button : Element = document.createElement('button');
button.textContent = "Roll the Dice";

document.body.appendChild(div);
document.body.appendChild(button);

//let rollDie : Function = (elem : Element, result : string) : boolean => {
//    (div as HTMLElement).textContent = result;
//    return true;
//}


(button as HTMLElement).onclick = (event) => {
    rollDie(div, text);
}

class Die {
    div : Element;
    constructor(div : Element) {
        this.div = div;
        (div as HTMLElement).style.width = squareSize;
        (div as HTMLElement).style.height = squareSize;
        (div as HTMLElement).style.border = "4px solid black";
        
        (div as HTMLElement).style.textAlign = "center";
        (div as HTMLElement).style.fontSize = "2em";
        (div as HTMLElement).style.display = "table-cell";
        (div as HTMLElement).style.verticalAlign = "middle";        
    }
    
    rollDie (result : string) : boolean {
        (this.div as HTMLElement).textContent = result;
        return true;
    }
}


enum Results {
    One = 1,
    Two,
    Three,
    Four,
    Five,
    Six
}

interface IDie {
    'div' : Element 
}

let singleDie = {
    'div' : document.createElement('div')
}


let diceSet : Array<IDie> = [];
for (let index = 0; index < 4; index++) {
   diceSet.push({
        document.createElement('div');
   }) 
}