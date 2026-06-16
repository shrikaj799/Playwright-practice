for (let i=3; i>=1; i--)
{
    let r=" ";
for(let j=1;j<=5;j++ )
    {
if(j>=i && j<=6-i)
{
     r+="*";   //The + in += ensures the row remembers the previous stars and spaces, growing longer until it forms a complete row of your pyramid!
}
else{
    r += " ";
}

    

}
console.log(r);
}