// Selecting necessary elements
const imag = document.querySelector(".item-images");
const y_score = document.querySelector("#y-score");
const c_score = document.querySelector("#c-score");
const rock = document.querySelector(".rock-image");
const scissor = document.querySelector(".scissor-image");
const paper = document.querySelector(".paper-image");
const scoreContainer = document.querySelector('.score-container');
const rules=document.querySelector(".rules");
const rulesc=document.querySelector("#rulesdesc");
const cancelbtn=document.querySelector(".cancel-btn");
const green =document.querySelector(".green")


function initalizescore() {
    const youscore = parseInt(localStorage.getItem("youscore")) || 0;
    const comscore = parseInt(localStorage.getItem("comscore")) || 0;
    y_score.innerText = youscore;
    c_score.innerText = comscore;
}
window.addEventListener("DOMContentLoaded",initalizescore);

// Function to reset the game state
function resetGame() {
    imag.innerHTML = `
        <div class="First-row-image">
            <div class="rock-image">
                <img src="rock.png" alt="">
            </div>
            <div class="scissor-image">
                <img src="scissor.png" alt="">
            </div>
        </div>
        <div class="paper-image">
            <img src="paper.png" alt="">
        </div>
    `;
}

// Event listener for handling "PLAY AGAIN" button click
scoreContainer.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'play-again') {
        resetGame();
    }
});

// Event listeners for handling user choices
rock.addEventListener("click", function() {
    const compturn = computerturn();
    comparsionturn(compturn, "rock");
});

scissor.addEventListener("click", function() {
    const compturn = computerturn();
    comparsionturn(compturn, "scissor");
});

paper.addEventListener("click", function() {
    const compturn = computerturn();
    comparsionturn(compturn, "paper");
});

// Function to handle computer's turn
function computerturn() {
    const l = ["rock", "paper", "scissor"];
    const p = Math.floor(Math.random() * 3);
    return l[p];
}

// Function to compare user's choice and computer's choice
function comparsionturn(compturn, youturn) {
    if (compturn === youturn) {
        console.log("It's a tie!");
        tiescore(compturn, youturn)
    } else if (
        (compturn === "rock" && youturn === "scissor") ||
        (compturn === "paper" && youturn === "rock") ||
        (compturn === "scissor" && youturn === "paper")
    ) {
        console.log("Computer wins!");
        compscore(compturn,youturn);
    } else {
        console.log("You win!");
        yourscore(compturn, youturn);
    }
}
//correct
// Function to update score when user wins
function yourscore(compturn, youturn) {
    console.log(youturn,compturn)
    let x = parseInt(y_score.innerText);
    x += 1;
    y_score.innerText = x.toString();
    localStorage.setItem("youscore",x)

    if (compturn === "scissor" && youturn === "rock"){
        imag.innerHTML = `
        <div class="First-row-image">
            <div class="sel">
                <p>You picked</p>
                <div class="rock-image">
                    <img src="rock.png" alt="">
                </div>
            </div>
            <div class="middle">
            <p>YOU WIN</p>
            <p>AGAINST PC</p>
            <button id="play-again">PLAY AGAIN</button>
            </div>
            <div class="sel">
                <p>PC picked</p>
                <div class="scissor-image">
                    <img src="scissor.png" alt="">
                </div>
            </div>
        </div>
        
    `;
    }
    else if (compturn === "rock" && youturn === "paper"){
        imag.innerHTML = `
        <div class="First-row-image">
            <div class="sel">
            <p>You picked</p>
                <div class="paper-image">
                    <img src="paper.png" alt="">
                </div>
            </div>
            <div class="middle">
            <p>YOU WIN</p>
            <p>AGAINST PC</p>
            <button id="play-again">PLAY AGAIN</button>
            </div>
            <div class="sel">
                <p>PC picked</p>
                <div class="rock-image">
                    <img src="rock.png" alt="">
                </div>
            </div>
        </div>
        
        
    `;
    }
    else if (compturn === "paper" && youturn === "scissor"){
        imag.innerHTML = `
        <div class="First-row-image">
            <div class="sel">
                <p>You picked</p>
                <div class="scissor-image">
                    <img src="scissor.png" alt="">
                </div>
            </div>
            <div class="middle">
            <p>YOU WIN</p>
            <p>AGAINST PC</p>
            <button id="play-again">PLAY AGAIN</button>
            </div>
            <div class="sel">
                <p>PC picked</p>
                <div class="paper-image">
                    <img src="paper.png" alt="">
                </div>
            </div>
        </div>
        
        
    `;
    }
    
    // // Appending the "PLAY AGAIN" button
    // imag.innerHTML = `
    //     <div class="First-row-image">
    //         <div class="rock-image">
    //             <p>You picked</p>
    //             <img src="rock.png" alt="">
    //         </div>
    //         <div class="scissor-image">
    //             <p>PC picked</p>
    //             <img src="scissor.png" alt="">
    //         </div>
    //     </div>
    //     <button id="play-again">PLAY AGAIN</button>
        
    // `;
    const playAgainButton = document.getElementById("play-again");
    playAgainButton.addEventListener("click", resetGameAndReload);
}

function resetGameAndReload() {
    resetGame(); // Reset the game state
    location.reload(); // Reload the page
}
//correct
function tiescore(compturn,youturn){
    if (compturn === "rock" && youturn === "rock"){
        imag.innerHTML = `
        <div class="First-row-image">
            <div class="sel">
                <p>You picked</p>
                <div class="rock-image">
                    
                    <img src="rock.png" alt="">
                </div>
            </div>
            <div class="middle">
            <p>TIE UP</p>
            <button id="play-again">REPLAY</button>
            </div>
            <div class="sel">
                <p>PC picked</p>
                <div class="rock-image">
                    <img src="rock.png" alt="">
                </div>
            </div>
        </div>
        
        
    `;
    }
    else if (compturn === "scissor" && youturn === "scissor"){
        imag.innerHTML = `
        <div class="First-row-image">
            <div class="sel">
                <p>You picked</p>
                <div class="scissor-image">
                    <img src="scissor.png" alt="">
                </div>
            </div>
            <div class="middle">
            <p>TIE UP</p>
            <button id="play-again">REPLAY</button>
            </div>
            <div class="sel">
                <p>PC picked</p>
                <div class="scissor-image">
                    <img src="scissor.png" alt="">
                </div>
            </div>
        </div>
        
        
    `;
    } 
    
    else if (compturn === "paper" && youturn === "paper"){
        imag.innerHTML = `
        <div class="First-row-image">
            <div class="sel">
                <p>You picked</p>
                <div class="paper-image">
                    <img src="paper.png" alt="">
                </div>
            </div>
            <div class="middle">
            <p>TIE UP</p>
            <button id="play-again">REPLAY</button>
            </div>
            <div class="sel">
                <p>PC picked</p>
                <div class="paper-image">
                    <img src="paper.png" alt="">
                </div>
            </div>
        </div>
        
        
    `;
    }
    const playAgainButton = document.getElementById("play-again");
    playAgainButton.addEventListener("click", resetGameAndReload);

}

// Function to update score when computer wins
function compscore(compturn,youturn) {

    let x = parseInt(c_score.innerText);
    x += 1;
    c_score.innerText = x.toString();
    localStorage.setItem("comscore",x)
    //correct
    if (compturn === "rock" && youturn === "scissor"){
        imag.innerHTML = `
        <div class="First-row-image">
            <div class="sel">
                <p>You picked</p>
                <div class="scissor-image">
                    <img src="scissor.png" alt="">
                </div>
            </div>
            <div class="middle">
            <p>YOU LOST</p>
            <p>AGAINST PC</p>
            <button id="play-again">PLAY AGAIN</button>
            </div>
            <div class="sel">
                <p>PC picked</p>
                <div class="rock-image">
                    <img src="rock.png" alt="">
                </div>
            </div>
        </div>
        
        
    `;
    }
    else if (compturn === "paper" && youturn === "rock"){
        imag.innerHTML = `
        <div class="First-row-image">
            <div class="sel">
                <p>You picked</p>
                <div class="rock-image">
                    <img src="rock.png" alt="">
                </div>
            </div>
            <div class="middle">
            <p>YOU LOST</p>
            <p>AGAINST PC</p>
            <button id="play-again">PLAY AGAIN</button>
            </div>
            <div class="sel">
                <p>PC picked</p>
                <div class="paper-image">
                    <img src="paper.png" alt="">
                </div>
            </div>
        </div>
        
        
    `;
    }
    else if (compturn === "scissor" && youturn === "paper"){
        imag.innerHTML = `
        <div class="First-row-image">
            <div class="sel">
                <p>You picked</p>
                <div class="paper-image">
                    <img src="paper.png" alt="">
                </div>
            </div>
            <div class="middle">
            <p>YOU LOST</p>
            <p>AGAINST PC</p>
            <button id="play-again">PLAY AGAIN</button>
            </div>
            <div class="sel">
                <p>PC picked</p>
                <div class="scissor-image">
                    <img src="scissor.png" alt="">
                </div>
            </div>
        </div>
        
        
    `;
    }

    
    // imag.innerHTML += `<button id="play-again">PLAY AGAIN</button>`;
    const playAgainButton = document.getElementById("play-again");
    playAgainButton.addEventListener("click", resetGameAndReload);
}
rules.addEventListener("click",()=>{
    rulesc.classList.toggle("show")
    cancelbtn.style.visibility='visible'
})

cancelbtn.addEventListener("click",()=>{
    rulesc.classList.toggle("show")
    cancelbtn.style.visibility='hidden'
})