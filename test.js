let bt=document.getElementById("btn");

let btn=document.getElementsByTagName("button");
let  res_btn = [];

for(let i=0;i<btn.length;i++)
{
    res_btn.push(btn[i].id);
}

console.log(btn);
console.log(res_btn);

function changecolor()
{
    let res_col;
    let col=document.getElementById("sel").value;
    if(col==="reset")
    {
        for(let i=0;i<btn.length;i++)
        {
            res_col=res_btn[i]
            btn[i].setAttribute("style",`color:white; background-color: ${res_col}; border: 2px; border-radius: 3px`);

        }
    }
    else{
        for(let i=0;i<btn.length;i++)
        {
            btn[i].setAttribute("style",`color:white; background-color: ${col}; border: 2px; border-radius: 3px`);
        }
    }
}
