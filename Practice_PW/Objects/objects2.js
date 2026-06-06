const person={
name:"shrikaj",
age:28,
employed:true   

}
console.log(person.name)

//adding methods

const car={
    name:"Innova",
    brand:"Toyota",
    Year:2024,
    startengine:function(){

    return `The ${this.name} of ${this.brand} is running in ${this.Year}`
    }

};

console.log(car.startengine());


const user={name:"raj",
            age:28
};
for (const key in user){
    console.log(`${key}:${user[key]}`)
}