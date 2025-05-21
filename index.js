console.log('hi this is js');

class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    getAnimal() {
        console.log(`This ${this.name} sounds as ${this.sound}`);

    }
}

const dog = new Animal('dog', 'gew gew')
console.log(dog.getAnimal());



class Bird extends Animal {
    constructor(name, sound, canFly) {
        super(name, sound)
        this.canFly = canFly
    }

    getBirdFly() {
        if (this.canFly) {

            console.log(`This bird ${this.name} can fly`);
            // return `This bird ${this.name} can fly`
        }
        else {
            console.log(` This bird ${this.name} cannot fly`);
            // return ` This bird ${this.name} cannot fly`
        }

    }
}

const parrot = new Bird('Tiya', 'gr gri', true)
console.log(parrot.getAnimal());
console.log(parrot.getBirdFly());









class MathUtils{
    static add(a,b){
        return a + b
    }
}

let add=  MathUtils.add(23,345)
console.log(add);







