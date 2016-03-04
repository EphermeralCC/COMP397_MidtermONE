// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _firstDice: objects.Label;
        private _secondDice: objects.Label;
        private _rollButton: objects.Button;
        private _rolls: createjs.Bitmap[];
        
        private _firstDiceNumber: number = 0;
        private _secondDiceNumber: number = 0;

        private _diceOne = 0;
        private _diceTwo = 0;
        private _diceThree = 0;
        private _diceFour = 0;
        private _diceFive = 0;
        private _diceSix = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            this._resetAll();
            
            // add rollnButton to the scene
            this._rollButton = new objects.Button("rollButton", 420, 400);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._spinButtonClick, this); 
            
            //Add _jackpotText to the scene
            this._firstDice = new objects.Label(
                this._firstDiceNumber.toString(),
                "bold 18px Consolas",
                "#8A80A3",
                250, 332);
            this._firstDice.textAlign = "right";
            this.addChild(this._firstDice);
            
            this._secondDice = new objects.Label(
                this._secondDiceNumber.toString(),
                "bold 18px Consolas",
                "#8A80A3",
                350, 332);
            this._secondDice.textAlign = "right";
            this.addChild(this._secondDice);

       

            
            //Initialize the reels array of Bitmaps
            this._initializeBitmapArray();   


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        private _resetAll(){
            this._firstDiceNumber = 0;
            this._secondDiceNumber = 0;
        }
        
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }

        private _rollDice(): string[] {
            var betLine = [" ", " "];
            var outCome = [0, 1];

            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 12) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 1, 2):  // 41.5% probability
                        betLine[spin] = "diceONE";
                        this._diceOne++;
                        if(betLine[0] == "diceONE"){
                            this._firstDice.text = "1";
                        }
                        else{
                            this._secondDice.text = "1";
                        }
                        break;
                    case this._checkRange(outCome[spin], 2, 4): // 15.4% probability
                        betLine[spin] = "diceTWO";
                        this._diceTwo++;
                        if(betLine[0] == "diceTWO"){
                            this._firstDice.text = "2";
                        } else{
                            this._secondDice.text = "2";
                        }
                        break;
                    case this._checkRange(outCome[spin], 5, 6): // 13.8% probability
                        betLine[spin] = "diceTHREE";
                        this._diceThree++;
                        if(betLine[0] == "diceTHREE"){
                            this._firstDice.text = "3";
                        } else{
                            this._secondDice.text = "3";
                        }
                        break;
                    case this._checkRange(outCome[spin], 7, 8): // 12.3% probability
                        betLine[spin] = "diceFOUR";
                        this._diceFour++;
                        if(betLine[0] == "diceFOUR"){
                            this._firstDice.text = "4";
                        } else{
                            this._secondDice.text = "4";
                        }
                        break;
                    case this._checkRange(outCome[spin], 9, 10): //  7.7% probability
                        betLine[spin] = "diceFIVE";
                        this._diceFive++;
                        if(betLine[0] == "diceFIVE"){
                            this._firstDice.text = "5";
                        } else{
                            this._secondDice.text = "5";
                        }
                        break;
                    case this._checkRange(outCome[spin], 11, 12): //  4.6% probability
                        betLine[spin] = "diceSIX";
                        this._diceSix++;
                        if(betLine[0] == "diceSIX"){
                            this._firstDice.text = "6";
                        } else{
                            this._secondDice.text = "6";
                        }
                        break;
                }
            }
            return betLine;
        }

        private _initializeBitmapArray(): void {

            this._rolls = new Array<createjs.Bitmap>();
            for (var roll: number = 0; roll < 2; roll++) {
                this._rolls[roll] = new createjs.Bitmap(assets.getResult("diceONE"));
                this._rolls[roll].x = 190 + (roll * 100);
                this._rolls[roll].y = 232;
                this.addChild(this._rolls[roll]);
            }

        }
        
               
        
        //EVENT HANDLERS ++++++++++++++++++++
        
         private _spinButtonClick(event: createjs.MouseEvent): void {
                var diceBitmap: string[] = this._rollDice();

                for (var roll: number = 0; roll < 2; roll++) {
                    this._rolls[roll].image = assets.getResult(diceBitmap[roll]);
                }

                //this._determineWinnings();
                //this._resetReelTally();
                


        }
        
    }
}

