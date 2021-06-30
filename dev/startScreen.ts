import { ObjectProperties } from "./objectProperties.js"
import { Game } from "./game.js"

export class StartScreen extends ObjectProperties{

    private game : Game
    
    constructor(game:Game) {
        super("startscreen")

        this.game = game
        
        const text = document.createElement("div")
        const button = document.createElement("button")

        this.element.appendChild(text)
        this.element.appendChild(button)

        text.innerText = "Monkey Rescue"
        button.innerText = "START GAME"
        
        button.addEventListener("click", () => this.gotoGameScreen())
    }

    private gotoGameScreen(){
        this.remove()
        this.game.showGameScreen()
    }

}