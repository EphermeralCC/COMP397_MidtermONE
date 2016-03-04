// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


            //Add Play Label
            this._playLabel = new objects.Label(
                "PLAY SCENE","60px Consolas", 
                "#000000", 
                config.Screen.CENTER_X,config.Screen.CENTER_Y);
            this.addChild(this._playLabel);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}