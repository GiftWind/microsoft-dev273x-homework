let text : string = "one";
let squareSizeNumber : number = 100;
let squareSize : string = `${ squareSizeNumber }px`;
let div : Element = document.createElement('div');

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
    
    rollDie (result : number | string) : boolean {
        if (typeof(result) === 'number') {
            return true;
        }
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

class NumericDie extends Die {
    constructor(div : Element) {
        super(div);
        (div as HTMLElement).style.width = squareSize;
        (div as HTMLElement).style.height = squareSize;
        (div as HTMLElement).style.border = "4px solid black";
        
        (div as HTMLElement).style.textAlign = "center";
        (div as HTMLElement).style.fontSize = "2em";
        (div as HTMLElement).style.display = "table-cell";
        (div as HTMLElement).style.verticalAlign = "middle";
    }

    rollDie(result : number) : boolean {
        (this.div as HTMLElement).textContent = Results[result];
        return true;
    }
}

interface IDie {
    'div' : Element 
}

let singleDie = {
    'div' : document.createElement('div')
}


let divSet : Array<Element> = [];
for (let index = 0; index < 4; index++) {
   divSet.push(document.createElement('div')) 
}

let diceSet : Array<Die> = [];
for (let index = 0; index < 4; index++) {
    diceSet.push(new NumericDie(divSet[index]));
    divSet[index].textContent = `${index}`;
    document.body.appendChild(divSet[index]);
}

let getRandomIntInclusive : Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let button : Element = document.createElement('button');
button.textContent = "Roll the Dice";
document.body.appendChild(button);

(button as HTMLElement).onclick = (event) => {
    diceSet.forEach(element => {
        element.rollDie(getRandomIntInclusive(1, 6));
    });
}