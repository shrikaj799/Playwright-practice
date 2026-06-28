let resonsecode:number []=[200,201,404,500,302,403];

function getfailedcodes(codes:number[]): number []{
    return codes.filter(function (code:number):boolean{
        return code>=400
    });

}
console.log("All codes", resonsecode);
console.log("failed codes", getfailedcodes(resonsecode))

