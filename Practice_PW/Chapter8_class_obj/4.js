class Playwright2xbatch{

    constructor(name, age){
        this.name=name;
        this.age=age;

    }

  

static topic="playwright";

static instructor="Pramod_sir";

static teaching (){

    console.log("We are learning " + this.topic + " from " + this.instructor)
}



}
//let stud =new Playwright2xbatch();
let stud1=new Playwright2xbatch ("shree", 28);
console.log(stud1)
Playwright2xbatch.teaching();

let stud2=new Playwright2xbatch ("raj", 28);
console.log(stud2)
Playwright2xbatch.teaching();

let stud3=new Playwright2xbatch ("Ram", 28);
console.log(stud3)
Playwright2xbatch.teaching();

let stud4=new Playwright2xbatch ("Rani", 28);
console.log(stud4)
Playwright2xbatch.teaching();

let stud5=new Playwright2xbatch ("Raman", 28);
console.log(stud5)
Playwright2xbatch.teaching();