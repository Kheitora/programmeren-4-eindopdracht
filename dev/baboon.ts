import { ObjectProperties } from "./objectProperties.js"

export class Baboon extends ObjectProperties {
   
    public _div: HTMLElement 


    public get div(): HTMLElement {
        return this._div;
    }
    public set div(value: HTMLElement) {
        this._div = value;
    }

    public transformed: boolean = false

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(tagName: string)  {
        super("baboon")
        
        this.create()
        
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth))
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    private create() : void {
        this.div = document.createElement("baboon")
        document.body.appendChild(this.div)   
    }

    public update() : void {

        if(this.x + this.div.clientWidth < 0 && this.transformed === false) {
            
            this.x = window.innerWidth
            
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
        }

        if(this.transformed === true){
            this.x -= 3
        }

        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public killBaboon() : void {
        this.div.classList.add("Transformed")
        this.transformed = true
    }

    
}