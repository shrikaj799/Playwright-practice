class calculator{
  

    constructor(a,b)
    {
        this.a=a;
        this.b=b
    }

    add(a ,b)
    {
        return this.a+this.b;
    }
    sub (a,b){
        return this.a-this.b;
    }
    mul(a,b){
        return this.a*this.b;

    }
    div(a,b){
        return (this.a/this.b)

    }
    

}
let nub=new calculator(10,5)
console.log(nub.add())
console.log(nub.sub())
console.log(nub.div())
console.log(nub.mul())
