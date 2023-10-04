const btns = document.querySelectorAll("button");

var string = "";

btns.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        const caughtElement = event.target.innerText;
        const answer = document.querySelector(".answer");
        if(caughtElement === "del") {
            string = string.slice(0, -1);
            answer.textContent = string;
        } 
        else if(caughtElement === "AC") {
            string = string.replace(string, "");
            answer.textContent = string;
        }
        else if(caughtElement === "=")
        {
            if(eval(string) == "Infinity")
                answer.textContent = "Math Error";
            else
                answer.textContent = eval(string);
            
            string = string.replace(string, "");
        }
        else {
            string += caughtElement;
            document.querySelector(".answer").textContent = string;
        }
    })
});


