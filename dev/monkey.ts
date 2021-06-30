import { ObjectProperties} from "./objectProperties.js"

export class Monkey extends ObjectProperties{
    
    
    public _div: HTMLElement

    public get div(): HTMLElement {
        return this._div;
    }
    public set div(value: HTMLElement) {
        this._div = value;
    }

    private verticalSpeed : number = 0
    private horizontalSpeed : number = 0

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    constructor(tagName: string) {
        super("monkey")
        console.log("Monkey was created!")

        
        window.addEventListener("keydown",  (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup",    (e: KeyboardEvent) => this.onKeyUp(e))
        

        this.create()
        
        this.x = 100
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight))
    }

    private create() : void {
        this.div = document.createElement("monkey")
        document.body.appendChild(this.div)  
        
    }

    public update() : void {
        
        
        this.y += this.verticalSpeed
        this.x += this.horizontalSpeed

        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    private onKeyDown(e: KeyboardEvent): void {
       
         //console.log(e.key)

        
        switch (e.key) {
            
            case "ArrowUp":
                
                this.verticalSpeed = -5
                break
            
            case "ArrowDown":
                
                this.verticalSpeed = 5
                break

            case "ArrowLeft":

                this.horizontalSpeed = -5
                break

            case "ArrowRight":

                this.horizontalSpeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        
        if(e.key == "ArrowUp" || e.key == "ArrowDown" || e.key == "ArrowLeft" || e.key == "ArrowRight") {
            
            //console.log(e.key)
            this.verticalSpeed = 0
            this.horizontalSpeed = 0
        }
    }

}