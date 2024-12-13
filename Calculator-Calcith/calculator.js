let calculation='';

function fun1() {
  calculation += '1';
  document.getElementById('screen').innerText = calculation;
}

function fun2(){
  calculation+='2'
  document.getElementById('screen').innerText=calculation;
}

function fun3(){
  calculation+='3'
  document.getElementById('screen').innerText=calculation;
}

function fun4(){
  calculation+='4';
  document.getElementById('screen').innerText=calculation;
}

function fun5(){
  calculation+='5';
  document.getElementById('screen').innerText=calculation;
}

function fun6(){
  calculation+='6';
  document.getElementById('screen').innerText=calculation;
}

function fun7(){
  calculation+='7';
  document.getElementById('screen').innerText=calculation;
}

function fun8(){
  calculation+='8';
  document.getElementById('screen').innerText=calculation;
}

function fun9(){
  calculation+='9';
  document.getElementById('screen').innerText=calculation;
}

function fun0(){
  calculation+='0';
  document.getElementById('screen').innerText=calculation;
}

function funDot(){
  calculation+='.';
  document.getElementById('screen').innerText=calculation;
}

function funPlus() {
  calculation+=' + ';
  document.getElementById('screen').innerText=calculation;
}

function funMinus(){
  calculation+=' - ';
  document.getElementById('screen').innerText=calculation;
}

function funMultiply(){
  calculation+=' * ';
  document.getElementById('screen').innerText=calculation;
}

function funDivide(){
  calculation+=' / ';
  document.getElementById('screen').innerText=calculation;
}

function funEvaluate(){
  calculation=eval(calculation)

  if (!Number.isInteger(calculation)==true){
    document.getElementById('screen').innerText=(calculation.toFixed(2));
  }
  else{

    document.getElementById('screen').innerText=calculation;
  }

}

function funClear(){
  calculation='';
  document.getElementById('screen').innerText=calculation;
}

function funDelete(){
  calculation=calculation.slice(0,-1)
  document.getElementById('screen').innerText=calculation;
}