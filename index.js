class Fruit{
    constructor(taste, type, color, status, ripe){
        this.taste = taste
        this.type = type
        this.color = color
        this.status = status
        this.ripe = ripe
    }



    isRipe(){
        if (this.color == "yellow"){

        console.log(`this ${this.type} is ripe!`)
        }else{
        console.log(`This ${this.type} is not ripe`)
        }
    }

    beenEaten(){
        if (this.status == "eaten"){
            console.log(`this ${this.type} has been eaten`)
        } else{
            console.log(`this ${this.type} has not been eaten`)
        }
    }

    eat(){
        if (this.ripe){
            this.status == "eaten"
            this.beenEaten()
            console.log("eat this fruit")
        } else if(this.status == "eaten") {
            console.log(`Can't eat this fruit`)
        }else{
            this.isRipe()
        }

    }
}






let apple = new Fruit("crispy", "apple", "red", "eaten", true )
let banana = new Fruit("mushy", "banana", "yellow", "whole", false )

// apple.isRipe()

// banana.isRipe()

// apple.beenEaten()

// banana.beenEaten()

apple.eat()
