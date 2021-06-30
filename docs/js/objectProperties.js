export class ObjectProperties {
    constructor(name) {
        this.x = 0;
        this.y = 0;
        const gameElement = document.querySelector('game');
        this.element = document.createElement(name);
        gameElement.appendChild(this.element);
    }
    remove() {
        this.element.remove();
    }
    update() {
    }
}
//# sourceMappingURL=objectProperties.js.map