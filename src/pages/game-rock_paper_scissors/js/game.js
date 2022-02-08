/* 
    let playerScore = 0;
    let computerScore = 0;
    playerScoreRef = React.createRef();
    computerScoreRef = React.createRef();
    VSRef = React.createRef();
    batuIDRef = React.createRef();
    kertasIDRef =React.createRef();
    guntingIDRef = React.createRef();
    batuCOMRef = React.createRef();
    kertasCOMRef = React.createRef();
    guntingCOMRef = React.createRef();
        




    function getComputerChoice(){
        let choices = ["gunting", "kertas", "batu"]
        let randomNumber = (Math.floor(Math.random() * 3));
        return choices[randomNumber];
    }
    
    function win(){
        let vs_span = this.VSRef.current;
        let playerScore_span = this.playerScoreRef.current;
        playerScore++;
        playerScore_span.innerHTML = playerScore;
        vs_span.className = "win";
        vs_span.innerHTML = "Player 1 Win";
        console.log("Player 1 Win !!")
    }
    function lose(){
        let vs_span = this.VSRef.current;
        let computerScore_span = this.computerScoreRef.current;
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        vs_span.className = "win";
        vs_span.innerHTML = "Computer Win";
        console.log("Player 1 Lose :<")
    }
    function draw(){
        let vs_span = this.VSRef.current;
        vs_span.innerHTML = "Draw";
        vs_span.className = "draw";
        console.log("Draw..")
    }
    
    
    function game(playerChoice){
        let computerChoice = getComputerChoice();
        
        let guntingCom_id = this.guntingCOMRef.current;
        let kertasCom_id = this.kertasCOMRef.current;
        let batuCom_id = this.batuCOMRef.current;
        if(computerChoice === "gunting"){
            guntingCom_id.style.backgroundColor = "#C4C4C4"
            }
        else if(computerChoice === "kertas"){
            kertasCom_id.style.backgroundColor = "#C4C4C4"
            }
        else if(computerChoice === "batu"){
            batuCom_id.style.backgroundColor = "#C4C4C4"
            }
    
         switch(playerChoice + computerChoice){
             case "batugunting":
             case "kertasbatu":
             case "guntingkertas":
        win();
        break;
    
            case "kertasgunting":
            case "guntingbatu":
            case "batukertas":
        lose();
        break;
    
            case "guntinggunting":
            case "kertaskertas":
            case "batubatu":
        draw();
        break;
    
         }
    }
    
    
    function main(){
        let batu_id = this.batuIDRef.current;
        let kertas_id = this.kertasIDRef.current;
        let gunting_id = this.guntingIDRef.current;

            batu_id.addEventListener('click', function(){
                batu_id.style.backgroundColor = "#C4C4C4" 
                game("batu")
            })
            kertas_id.addEventListener('click', function(){
                kertas_id.style.backgroundColor = "#C4C4C4" 
                game("kertas")
            })
            gunting_id.addEventListener('click', function(){
                gunting_id.style.backgroundColor = "#C4C4C4" 
                game("gunting")
            })
    
    }
    
    main();
 */