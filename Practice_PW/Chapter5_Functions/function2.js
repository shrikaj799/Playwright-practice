1//Normal function
/*
function validateCode(status){
if(status>=200 && status<=400)
    {
    console.group("req is fine")
    }

}

validateCode(200);*/

2//function as expression

/*const validateCode=function(status){
if(status>=200 && status<=400)
    {
    console.group("req is fine")
    }
    else 
    {
     console.group("req is not fine")   
    }

}
validateCode(500)*/

//3 arrow function

const validatecode =(status)=>{
    if(status>=200 && status<=400)
    {
    console.group("req is fine")
    }
    else 
    {
     console.group("req is not fine")   
    }
  
    }
      validatecode(500)