console.log('hi this is js');

class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    getAnimal(){
        console.log(`This ${this.name} sounds as ${this.sound}`);
        
    }
}

const dog= new Animal('dog','gew gew')
console.log(dog.getAnimal());
