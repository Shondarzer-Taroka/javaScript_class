
class Room {
    constructor(name) {
        this.name = name
        this.wok = () => console.log(this.name);

    }
}



class Room2 {
    constructor(name) {
        this.name = name
    }

    getRoom() {
        console.log(this.name);

    }
}

let room1 = new Room('Roie')
let room2 = new Room('Weoi')
room1.wok()
room2.wok()
console.log(room1);

console.log(room1.wok === room2.wok);


let room3 = new Room2('Raopn')
let room4 = new Room2('Qeaui')
console.log(room3.getRoom === room4.getRoom);
console.log(room4);








// function SecretBox() {
//     function secret() {
//         console.log("Hidden stuff");
//     }

//     this.reveal = function() {
//         secret(); // ✅ allowed
//     };
// }

// const box = new SecretBox();
// box.reveal(); // ✅ Hidden stuff
// box.secret(); // ❌ TypeError














class Nilima {
    static gratings() {
        console.log('Hi nilima');
        console.log(`${this.name} ${this.grating}`);
        

    }

    constructor(name,grating){
        this.name=name
        this.grating=grating
    }

    gratings(){
        console.log(`this great`,this);
        
        console.log(`${this.name} ${this.grating}`);
        
    }
}


const nilima1= Nilima.gratings()
const nilima2= new Nilima('Nilima',"welcome")
console.log(nilima2);
nilima2.gratings()







class Student{
    constructor(name,className){
        this.name=name
        this.className=className
    }
}


class newStudent extends Student{
    constructor(name,className,role){
        super(name,className)
        this.role=role
    }
    getStudent(){
        console.log('std',this);
        
        return `${this.name} ${this.className} ${this.role} `
    }
}

let std1=new newStudent('Riskol','Seven',9)
console.log(std1.getStudent());






