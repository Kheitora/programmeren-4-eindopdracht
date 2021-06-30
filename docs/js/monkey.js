import { ObjectProperties } from "./objectProperties.js";
export class Monkey extends ObjectProperties {
    constructor(tagName) {
        super("monkey");
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        console.log("Monkey was created!");
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.create();
        this.x = 100;
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    get div() {
        return this._div;
    }
    set div(value) {
        this._div = value;
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    create() {
        this.div = document.createElement("monkey");
        document.body.appendChild(this.div);
    }
    update() {
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    onKeyDown(e) {
        switch (e.key) {
            case "ArrowUp":
                this.verticalSpeed = -5;
                break;
            case "ArrowDown":
                this.verticalSpeed = 5;
                break;
            case "ArrowLeft":
                this.horizontalSpeed = -5;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 5;
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowLeft" || e.key == "ArrowRight") {
            this.verticalSpeed = 0;
            this.horizontalSpeed = 0;
        }
    }
}
//# sourceMappingURL=monkey.js.map