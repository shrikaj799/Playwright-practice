class car{
    constructor(name){
        this.name=name;

    }
drive(){
    console.log("I am driving ", this.name)
}

}

const tata=new car("safari");
tata.drive();
