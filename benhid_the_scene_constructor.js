
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

let bir1= new BoloBir('Hamid',34,'Wellcome')
bir1.greatings()
BoloBir.greatings()
