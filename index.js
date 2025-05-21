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









class MathUtils {
    static add(a, b) {
        return a + b
    }
}

let add = MathUtils.add(23, 345)
console.log(add);







class Person {
    constructor(name, age) {
        this._name = name
        this._age=age
    }

    get name(){
        return this._name
    }

    set age(value){
        if (value<0) {
            return ` age must be positive`
        } else {
           this._age = value;

        }
    }
}

const rakib= new Person('Rakib',34)
console.log(rakib.name);
// console.log(rakib.set(-5));
console.log(rakib._age);

rakib.age=-8
// console.log(rakib.age(-5));
















class Counter{
    #count=0

    increment(){
        this.#count++
        console.log(this.#count);
        
    }
}

const counter_1=new Counter()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()
counter_1.increment()







  /// ///////////// binding this

  class Button{
    constructor(){
        this.btn='click me'
        this.handleClick=()=>{
            console.log(this.btn);
            
        }
    }
  }

  let bt1= new Button()
  console.log(bt1.handleClick());
  









  