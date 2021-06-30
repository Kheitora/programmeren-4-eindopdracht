import { ObjectProperties } from "./objectProperties.js"
import { Game } from "./game.js"

export class EndScreen extends ObjectProperties{

    private game : Game
    
    constructor(game:Game) {
        super("endscreen")

        this.game = game

        const text = document.createElement("div")
        const button = document.createElement("button")

        this.element.appendChild(text)
        this.element.appendChild(button)

        text.innerText = "Congratulations! You saved a lot of monkeys!"
        button.innerText = "PLAY AGAIN"
        
        button.addEventListener("click", () => this.gotoGameScreen())

        
    }

    private gotoGameScreen(){
        this.remove()
        this.game.showGameScreen()
    }

}