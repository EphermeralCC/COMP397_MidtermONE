// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel: objects.Label;
        private _startOverButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {
            //Add Menu Label
            this._endLabel = new objects.Label(
                "END SCENE", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._endLabel);
            
            // add the BACK button to the OVER scene
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
           
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}