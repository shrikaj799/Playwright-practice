let r =[[1,2,3],
        [4,5,6],
        [7,8,9]
]

//this is 3*3 2d array
/*for (let i=0;i<r.length;i++)
{
    for(j=0;j<r[i].length;j++)
        console.log(r[i][j]);
    console.log("\n")
}
   OR 
*/


//for of loop 
for (let row of r)
{
    for(let cell of row)
    {
        console.log(cell)
    }
    console.log("\n");
}