let text : string = "one";
let squareSizeNumber : number = 100;
let squareSize : string = `${ squareSizeNumber }px`;
let div : Element = document.createElement('div');

(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height = squareSize;
(div as HTMLElement).style.border = "4px solid black";
(div as HTMLElement).textContent = text;
(div as HTMLElement).style.textAlign = "center";
(div as HTMLElement).style.fontSize = "2em";
(div as HTMLElement).style.display = "table-cell";
(div as HTMLElement).style.verticalAlign = "middle";

document.body.appendChild(div);

enum RollResult {
    One = 1,
    Two,
    Three,
    Four,
    Five,
    Six
} 