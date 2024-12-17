document.addEventListener('DOMContentLoaded',function(){

  function gameTitle(){
    const playerName=prompt('Enter your name:');
    if(playerName){
      document.getElementById('gameTitle').innerText=playerName+' V/S Computer';

      document.getElementById('playerNameCell').innerText=playerName+'\'s Score';
    }
    else{
      document.getElementById('gameTitle').innerText='Player V/S Computer';
      document.getElementById('playerNameCell').innerText='Player score';
    }
  }

  gameTitle();
});

