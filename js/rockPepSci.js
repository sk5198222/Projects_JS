let cMove='';
let uMove='';

    let score={win:0,lose:0,tie:0};

    function compMove(){
      let move=Math.random();
      if(move<=(1/3))
        cMove= 'rock';
      else if(move<=(1/6))
        cMove= 'paper';
      else
        cMove= 'scissor';
      return cMove;
    }

    function Move(move){
      let c=compMove();
      u=move;
      res(c,u);
    }

    function res(cM,uM){
      let inHTML='';

      if(cM===uM){
        document.querySelector('.res').textContent='Tied';
        score.tie++;
      } 
      else if(cM==='rock' && uM==='paper' || cM==='scissor' && uM==='rock' || cM==='paper' && uM==='scissor'){
        document.querySelector('.res').textContent='Won';
        score.win++;
      }
      else{
        document.querySelector('.res').textContent='Lost';
        score.lose++;
      }
      
      inHTML=`You <img class="pngs" src="/images/${uM}.png">    <img class="pngs" src="/images/${cM}.png"> Computer`;

      document.querySelector('.show').innerHTML=inHTML;
      document.querySelector('.counts').textContent=`Wins: ${score.win}, Ties: ${score.tie}, Losses: ${score.lose}`;
    }

    function resetScore(){
      score.win=0;
      score.lose=0;
      score.tie=0;

      document.querySelector('.res').innerHTML='Score has been reset.';
      document.querySelector('.show').innerHTML='Play again!!!';
      document.querySelector('.counts').textContent=`Wins: ${score.win}, Ties: ${score.tie}, Losses: ${score.lose}`;
    }