import { Monkey } from "./monkey.js";
import { Baboon } from "./baboon.js";
import { ObjectProperties } from "./objectProperties.js";
export class GameScreen extends ObjectProperties {
    constructor(game) {
        super("gamescreen");
        this.baboon = [];
        this.monkeyAmount = 0;
        this.countdown = 5400;
        console.log("Game was created!");
        this.game = game;
        this.baboon.push(new Baboon("baboon"));
        this.baboon.push(new Baboon("baboon"));
        this.baboon.push(new Baboon("baboon"));
        this.baboon.push(new Baboon("baboon"));
        this.baboon.push(new Baboon("baboon"));
        this.baboon.push(new Baboon("baboon"));
        this.baboon.push(new Baboon("baboon"));
        this.baboon.push(new Baboon("baboon"));
        this.monkey = new Monkey("monkey");
        this.monkeyAmountElement = document.createElement("score");
        document.body.appendChild(this.monkeyAmountElement);
        this.monkeyAmountElement.innerText = "0";
        this.countdownElement = document.createElement("timer");
        document.body.appendChild(this.countdownElement);
        this.countdownElement.innerText = "90";
        this.gameLoop();
    }
    updateMonkeyAmount() {
        this.monkeyAmountElement.innerText = `You saved ${this.monkeyAmount} monkeys`;
    }
    gameLoop() {
        this.updateMonkeyAmount();
        for (const baboon of this.baboon) {
            baboon.update();
            if (this.checkCollision(baboon.getBoundingRect(), this.monkey.getBoundingRect())) {
                let random = Math.floor(Math.random() * (2 - 0) + 0);
                let chance = ["yes", "no"];
                if (baboon.transformed === false && chance[random] === "yes") {
                    baboon.killBaboon();
                    this.baboon.push(new Baboon("baboon"));
                    this.monkeyAmount++;
                    console.log(this.monkeyAmount);
                }
                else if (baboon.transformed === false && chance[random] === "no") {
                    baboon.div.remove();
                    this.baboon.push(new Baboon("baboon"));
                }
            }
        }
        this.countdown--;
        let secondsLeft = Math.floor(this.countdown / 60);
        this.countdownElement.innerText = `You have ${secondsLeft} seconds left`;
        if (this.countdown === 1) {
            this.countdown = 0;
            console.log(this.countdown);
            this.gotoEndScreen();
        }
        this.monkey.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    gotoEndScreen() {
        for (const baboon of this.baboon) {
            baboon.div.remove();
        }
        document.body.removeChild(this.monkeyAmountElement);
        document.body.removeChild(this.countdownElement);
        this.game.showEndScreen();
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
//# sourceMappingURL=gameScreen.js.map