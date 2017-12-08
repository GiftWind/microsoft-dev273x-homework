var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var text = "one";
var squareSizeNumber = 100;
var squareSize = squareSizeNumber + "px";
var div = document.createElement('div');
var Die = /** @class */ (function () {
    function Die(div) {
        this.div = div;
        div.style.width = squareSize;
        div.style.height = squareSize;
        div.style.border = "4px solid black";
        div.style.textAlign = "center";
        div.style.fontSize = "2em";
        div.style.display = "table-cell";
        div.style.verticalAlign = "middle";
    }
    Die.prototype.rollDie = function (result) {
        if (typeof (result) === 'number') {
            return true;
        }
        this.div.textContent = result;
        return true;
    };
    return Die;
}());
var Results;
(function (Results) {
    Results[Results["One"] = 1] = "One";
    Results[Results["Two"] = 2] = "Two";
    Results[Results["Three"] = 3] = "Three";
    Results[Results["Four"] = 4] = "Four";
    Results[Results["Five"] = 5] = "Five";
    Results[Results["Six"] = 6] = "Six";
})(Results || (Results = {}));
var NumericDie = /** @class */ (function (_super) {
    __extends(NumericDie, _super);
    function NumericDie(div) {
        var _this = _super.call(this, div) || this;
        div.style.width = squareSize;
        div.style.height = squareSize;
        div.style.border = "4px solid black";
        div.style.textAlign = "center";
        div.style.fontSize = "2em";
        div.style.display = "table-cell";
        div.style.verticalAlign = "middle";
        return _this;
    }
    NumericDie.prototype.rollDie = function (result) {
        this.div.textContent = Results[result];
        return true;
    };
    return NumericDie;
}(Die));
var divSet = [];
for (var index = 0; index < 4; index++) {
    divSet.push(document.createElement('div'));
}
var diceSet = [];
for (var index = 0; index < 4; index++) {
    diceSet.push(new NumericDie(divSet[index]));
    divSet[index].textContent = "" + index;
    document.body.appendChild(divSet[index]);
}
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var button = document.createElement('button');
button.textContent = "Roll the Dice";
document.body.appendChild(button);
button.onclick = function (event) {
    diceSet.forEach(function (element) {
        element.rollDie(getRandomIntInclusive(1, 6));
    });
};
