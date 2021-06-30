import { ObjectProperties } from "./objectProperties.js";
export class StartScreen extends ObjectProperties {
    constructor(game) {
        super("startscreen");
        this.game = game;
        const text = document.createElement("div");
        const button = document.createElement("button");
        this.element.appendChild(text);
        this.element.appendChild(button);
        text.innerText = "Monkey Rescue";
        button.innerText = "START GAME";
        button.addEventListener("click", () => this.gotoGameScreen());
    }
    gotoGameScreen() {
        this.remove();
        this.game.showGameScreen();
    }
}
//# sourceMappingURL=startScreen.js.map