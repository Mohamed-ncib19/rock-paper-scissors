let choices = document.querySelectorAll('.choice');
let botChoices = ['rock','papaer','scissors']; 

//random number for bot choices
let generateRandomNumber=()=>{
    return Math.floor(Math.random()*3);  
}

let winner= function (x,y){
    return (
        x=="paper" && y=="rock" ? "you won"
        :x=="paper" && y=="scissors" ? "you lost"
        :x=="rock" && y=="paper" ? "you lost"
        :x=="rock" && y=="scissors" ? "you won"
        :x=="scissors" && y=="rock" ? "you lost"
        :x=="scissors" && y=="paper" ? "you won"
        :"draw"
    )
}

//bot choices

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let user = choice.getAttribute("data-option");
        let bot  = botChoices[generateRandomNumber()];
        console.log(winner(user,bot));
        document.getElementById('demo').innerHTML=  `You played : ${user} <br>The bot played : ${bot}<br>${winner(user,bot)}`
       
       
    })
});    


