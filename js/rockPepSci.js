let cMove='';
    let uMove='';

    const score={win:0,lose:0,tie:0};
    function compMove(){
      let move=Math.random();
      if(move<=(1/3))
        cMove= 'Rock';
      else if(move<=(1/6))
        cMove= 'Paper';
      else
        cMove= 'Scissor';
      return cMove;
    }

    function Move(move){
      let c=compMove();
      u=move;
      res(c,u);
    }
    function res(cM,uM){
      let fin='';
      if(cM===uM){
        fin='Tied';
        tie++;
      } 
      else if(cM==='Rock' && uM==='Paper' || cM==='Scissor' && uM==='Rock' || cM==='Paper' && uM==='Scissor'){
        fin='Won';
        win++;
      }
      else{
        fin='Lost';
        lose++;
      }

      let output=`You choose: ${uM}.
Computer choose: ${cM}.\n`;
(fin==='Won') ?  output+=`Congrats, you ${fin}...!!!\nWoohooo!!!` :(fin==='Lost') ? output+=`Bad move, you ${fin}...!!!\nTry again` : output+=`Don\'t worry', you both ${fin}...!!!\nPlay again`;

      alert(output+`\nWin: ${win}  Lose: ${lose}  Tie: ${tie}`);
    }