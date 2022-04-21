let bt=document.getElementById("btn");

let btn=document.getElementsByTagName("button");
let  res_btn = [];


//Get the original colours of the buttons
for(let i=0;i<btn.length;i++)
{
    res_btn.push(btn[i].id);
}

console.log(btn);
console.log(res_btn);


//Change colour based on selection 
function changecolor()
{
    let res_col;
    
    //col variable has the selected colour or option
    let col=document.getElementById("sel").value;
    
    //Changing the colours to original state
    if(col==="reset")
    {
        for(let i=0;i<btn.length;i++)
        {
            res_col=res_btn[i]
            btn[i].setAttribute("style",`color:white; background-color: ${res_col}; border: 2px; border-radius: 3px`);

        }
    }
    
    
    // Changing colour according to selection
    else{
        for(let i=0;i<btn.length;i++)
        {
            btn[i].setAttribute("style",`color:white; background-color: ${col}; border: 2px; border-radius: 3px`);
        }
    }
}
