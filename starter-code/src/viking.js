// Soldier
function Soldier (health,strength) {
     this.health = health
     this.strength = strength
     this.attack = function(){
        return this.strength
     }
     this.receiveDamage =function(damage){
        this.health-=damage
        
     }
}

// Viking
Viking.prototype = Object.create(Soldier.prototype)
Viking.prototype.constructor = Viking
function Viking (name,health,strength) {
    this.name = name
    Soldier.call(this,health,strength)

    this.receiveDamage = function(damage){
        this.health-=damage
        if(this.health <=0){
            return this.name+ " has died in act of combat"
        }
        return this.name+ " has received " + damage + " points of damage"
    }

    this.battleCry = function(){
        return "Odin Owns You All!"
    }

}

// Saxon
Saxon.prototype = Object.create(Soldier.prototype)
Saxon.prototype.constructor = Saxon
function Saxon (health,strength) {
    Soldier.call(this,health,strength)
    this.receiveDamage = function(damage){
        this.health -= damage
        if(this.health<=0){
          return "A Saxon has died in combat" 
        }
        return "A Saxon has received " + damage + " points of damage"
    }
}
// Saxon.prototype.receiveDamage = function(damage){
//     this.health -= damage
//     if (this.health <=0){
//         return "A Saxon has died in combat"
//     }
//     return "A Saxon has received " + damage + " points of damage"
//  }
// War
function War () {
    this.vikingArmy = []
    this.saxonArmy = []

    this.addViking = function(Viking){
        this.vikingArmy.push(Viking)
    }
    this.addSaxon = function(Saxon){
        this.saxonArmy.push(Saxon)
    }
    this.vikingAttack = function(){
       let someSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
       let someViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
       someSaxon.receiveDamage(someViking.attack())
       if(someSaxon.health <= 0){
           this.saxonArmy = []
           return "A Saxon has died in combat"
       }
       
    }
    this.saxonAttack = function(){
        let someSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let someViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        someViking.receiveDamage(someSaxon.attack())
        if(someViking.health <=0){
            this.vikingArmy = []

        }
        return someViking.name+ " has received " + someSaxon.strength + " points of damage"

    }

    this.showStatus = function(){
        if(this.saxonArmy === undefined || this.saxonArmy.length ==0 ){ // To check if an array is empty or not
            return "Vikings have won the war of the century!"
        }else if(this.saxonArmy.length >0 && this.vikingArmy.length !=0 ){
            return "Vikings and Saxons are still in the thick of battle."
        }
        return "Saxons have fought for their lives and survive another day..."
                
    }
}
