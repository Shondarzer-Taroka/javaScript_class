
function BoloBir(name,age,greating) {
    this.name=name
    this.age=age
    this.greating=greating
}


BoloBir.prototype.greatings=function () {
    console.log('this',this);
    console.log(`proto ${this.name} ${this.age} ${this.greating}`);
}


BoloBir.greatings=function() {
    console.log(`hi ${this.name}`);
    // console.log(this.prototype);
    
    
}

// let bir1= new BoloBir('Hamid',34,'Wellcome')
// bir1.greatings()
// BoloBir.greatings()



function BoloBir_2(name,age,greating,status) {
    BoloBir.call(this,name,age,greating)
    this.status=status
}

BoloBir_2.prototype=Object.create(BoloBir.prototype)


BoloBir_2.prototype.constructor=BoloBir_2

let bir3=new BoloBir_2('Hamid',23,'wellcome','classic')
console.log(BoloBir_2.prototype.constructor);
console.log(bir3);
