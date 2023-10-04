const btns = document.querySelectorAll("button");

var arr = []

btns.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        const caughtElement = event.target.innerText;
        console.log(caughtElement);
        if(caughtElement === "del")
        {
            arr.pop();
        }
        else{
            arr.push(caughtElement);
        }
        console.log(arr);
    })
});


