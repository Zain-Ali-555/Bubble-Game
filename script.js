let default_Time = 60;
let default_Score = 0;
let rand_target = 0;

function BubbleGenerator() {
    let loop = "";

    for (let i = 1; i <= 140; i++) {
        let rand_num = Math.floor(Math.random() * 10);
        loop += `<div class="bubble">${rand_num}</div>`;
    }

    document.querySelector('#container-bottom').innerHTML = loop;
}

function targetNumber() {
    rand_target = Math.floor(Math.random() * 10);
    document.querySelector("#Target_Div").textContent = rand_target;
}

function timer() {
    let time = setInterval(() => {
        if (default_Time > 0) {
            default_Time--;
            document.querySelector("#Timer_Div").textContent = default_Time;
        } else {
            document.querySelector('#container-bottom').innerHTML = "";
            clearTimeout(time);
            document.querySelector('#container-bottom').innerHTML = `
              <h1 style="position:absolute;top:50vh;font-size:50px;">Game Over</h1>
              <p style="font-size:20px;">Your Score: ${default_Score}</p>
            `;
            // window.alert("Times Up");
        }
    }, 1000);
}

function scoreIncreaser() {
    default_Score += 10;
    document.querySelector("#Score_Div").innerHTML = default_Score;
}

document.querySelector("#container-bottom")
.addEventListener("click", function (details) {
        let clicked_Number = Number(details.target.textContent);
        if (clicked_Number === rand_target) {
            scoreIncreaser();
            BubbleGenerator();
            targetNumber();
        } else if (clicked_Number != rand_target) {
            window.alert("You Click Wrong Target.")
        }
    })

document.querySelector("#Restart_Button")
.addEventListener("click",function (details) {
    window.location.reload();
    // window.alert("Press Ok to Start Game.")
})

BubbleGenerator();
timer();
targetNumber();