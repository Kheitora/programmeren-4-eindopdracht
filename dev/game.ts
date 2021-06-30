import { StartScreen } from "./startScreen.js"
import { GameScreen } from "./gameScreen.js"
import { EndScreen } from "./endScreen.js"
import { ObjectProperties } from "./objectProperties.js"

export class Game {

    private screen: ObjectProperties

    constructor(){
        this.showStartScreen()
        this.gameLoop()
    }

    public showStartScreen(){
        this.screen = new StartScreen(this)
    }

    public showGameScreen(){
        this.screen = new GameScreen(this)
    }

    public showEndScreen(){
        this.screen = new EndScreen(this)
    }

    private gameLoop(){
        this.screen.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new Game()