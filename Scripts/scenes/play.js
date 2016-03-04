var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
            this._firstDiceNumber = 0;
            this._secondDiceNumber = 0;
            this._diceOne = 0;
            this._diceTwo = 0;
            this._diceThree = 0;
            this._diceFour = 0;
            this._diceFive = 0;
            this._diceSix = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._resetAll();
            // add rollnButton to the scene
            this._rollButton = new objects.Button("rollButton", 420, 400);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._spinButtonClick, this);
            //Add _jackpotText to the scene
            this._firstDice = new objects.Label(this._firstDiceNumber.toString(), "bold 18px Consolas", "#8A80A3", 250, 332);
            this._firstDice.textAlign = "right";
            this.addChild(this._firstDice);
            this._secondDice = new objects.Label(this._secondDiceNumber.toString(), "bold 18px Consolas", "#8A80A3", 350, 332);
            this._secondDice.textAlign = "right";
            this.addChild(this._secondDice);
            //Initialize the reels array of Bitmaps
            this._initializeBitmapArray();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        Play.prototype._resetAll = function () {
            this._firstDiceNumber = 0;
            this._secondDiceNumber = 0;
        };
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        Play.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        Play.prototype._rollDice = function () {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 12) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 2):
                        betLine[spin] = "diceONE";
                        this._diceOne++;
                        break;
                    case this._checkRange(outCome[spin], 2, 4):
                        betLine[spin] = "diceTWO";
                        this._diceTwo++;
                        break;
                    case this._checkRange(outCome[spin], 5, 6):
                        betLine[spin] = "diceTHREE";
                        this._diceThree++;
                        break;
                    case this._checkRange(outCome[spin], 7, 8):
                        betLine[spin] = "diceFOUR";
                        this._diceFour++;
                        break;
                    case this._checkRange(outCome[spin], 9, 10):
                        betLine[spin] = "diceFIVE";
                        this._diceFive++;
                        break;
                    case this._checkRange(outCome[spin], 11, 12):
                        betLine[spin] = "diceSIX";
                        this._diceSix++;
                        break;
                }
            }
            return betLine;
        };
        Play.prototype._initializeBitmapArray = function () {
            this._rolls = new Array();
            for (var roll = 0; roll < 2; roll++) {
                this._rolls[roll] = new createjs.Bitmap(assets.getResult("diceONE"));
                this._rolls[roll].x = 190 + (roll * 100);
                this._rolls[roll].y = 232;
                this.addChild(this._rolls[roll]);
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._spinButtonClick = function (event) {
            var diceBitmap = this._rollDice();
            for (var roll = 0; roll < 2; roll++) {
                this._rolls[roll].image = assets.getResult(diceBitmap[roll]);
            }
            //this._determineWinnings();
            //this._resetReelTally();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map