import { ObjectProperties } from "./objectProperties.js";
export class Baboon extends ObjectProperties {
    constructor(tagName) {
        super("baboon");
        this.transformed = false;
        this.create();
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
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
        this.div = document.createElement("baboon");
        document.body.appendChild(this.div);
    }
    update() {
        if (this.x + this.div.clientWidth < 0 && this.transformed === false) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        if (this.transformed === true) {
            this.x -= 3;
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    killBaboon() {
        this.div.classList.add("Transformed");
        this.transformed = true;
    }
}
//# sourceMappingURL=baboon.js.map