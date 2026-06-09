for(let i=0;i<3;i++)
 
{
     let row="";
    for(let j=0;j<=i;j++)
    {
     //row+= "*";  
     row=row+"*";
    }
    console.log(row)
 }   


/* AI logic explained 
Step-by-Step Execution TraceLet's walk through exactly what the computer does behind the scenes:1. First Iteration of Outer Loop (i = 0)i is initialized to 0. Since 0 < 3 is true, the loop starts.let row = ""; creates an empty string.Inner Loop Starts (j = 0):Checks the condition: Is j <= i? (0 <= 0 is true).Executes the body: row = "" + "*" $\rightarrow$ row becomes *.j increments to 1.Checks the condition: Is 1 <= 0? False. The inner loop ends.console.log(row) prints * to the console.2. Second Iteration of Outer Loop (i = 1)i increments to 1. Since 1 < 3 is true, the loop continues.let row = ""; resets the row to an empty string.Inner Loop Starts (j = 0):Is 0 <= 1? True.row = "" + "*" $\rightarrow$ row becomes *.j increments to 1.Inner Loop Second Run (j = 1):Is 1 <= 1? True.row = "*" + "*" $\rightarrow$ row becomes .j increments to 2.Is 2 <= 1? False. The inner loop ends.console.log(row) prints  to the console.3. Third Iteration of Outer Loop (i = 2)i increments to 2. Since 2 < 3 is true, the loop continues.let row = ""; resets the row to an empty string.Inner Loop Runs (from j = 0 to j = 2):When j = 0: row becomes *When j = 1: row becomes When j = 2: row becomes ***j increments to 3. Is 3 <= 2? False. The inner loop ends.console.log(row) prints *** to the console.Loop Terminationi increments to 3.The outer loop condition checks: Is 3 < 3? False.The entire program finishes execution.
*/