let result = document.getElementById('number');
let check = document.getElementById('btn');
let div = document.getElementById('div');
let start = document.getElementById('start')
start.disabled=true;
let para = document.getElementById('para2')
let sec = document.getElementById('section')
let helpBtn = document.getElementById('help')
let num1;
let num2;
let operator;
let success=0;
let input=document.getElementById('input');
 let student;
let timeLimitPerQuestion = 10

 let timer; 

function startTimer() {
    let secondsLeft = timeLimitPerQuestion;
start.disabled=true;
    timer = setInterval(() => {
        if (secondsLeft <= 0) {
            para.innerText = 'נגמר הזמן';
            start.disabled=false;
            clearInterval(timer);
            
            return;
        }
        para.innerText = `נותרו ${secondsLeft} שניות`
        console.log(`נותרו ${secondsLeft} שניות`);
        secondsLeft--;
    }, 1000);
}
function stopTimer() {
    start.disabled=false;
    clearInterval(timer);
}

input.addEventListener('change', (event) => {
     player= new player(event.target.value);
     start.disabled=false;
})
class  player{
    name;
    level;
    constructor(name){
        this.name=name;
        this.level=1;
    }
    addLevel(){
        this.level++;
    }
    
}

start.addEventListener('click', () => {
     startTimer()
    check.disabled=false;
    result.value = "";
    para.innerHTML = "";
    num1 = (Math.floor(Math.random() * (10*player.level))) + 1;
    num2 = (Math.floor(Math.random() *(10*player.level))) + 1;
    operator = (Math.floor(Math.random() * 4)) + 1
    switch (operator) {
        case 1:
            operator = '+';
            break;
        case 2:
            operator = '-';
            break;
        case 3:
            operator = '*';
            break;
        case 4:
            operator = '/'
            break;
            }
                const arr = ['+', '-', '*', '/'];
                operator = arr[(Math.floor(Math.random() * 4))];
            
    let p = document.getElementById('para');
    p.innerHTML = `${num1}${operator}${num2}=`;
    
})

check.addEventListener('click', () => {
    
     console.log(success+"success");
    let sum = Number(result.value);
    console.log(sum);
    console.log(operator);
     console.log(num1+num2);
    let trueFalse = false;
    if      (operator === '+') {
        if (num1 + num2 === sum) {
            trueFalse = true;
            para.innerText = 'כל הכבוד, תשובה נכונה!'
            success++;
            stopTimer();
        }
    }
    else if (operator === '-') {
        if (num1 - num2 === sum) {
            trueFalse = true;
            para.innerText = 'כל הכבוד, תשובה נכונה!'
             success++;
     stopTimer();
        }
    }
    else if (operator === '*') {
        if (num1 * num2 === sum) {
            trueFalse = true;
            para.innerText = 'כל הכבוד, תשובה נכונה!'
             success++;
        stopTimer();
        }
    }
    else if (operator === '/') {
        if (num1 / num2 === sum) {
            trueFalse = true;
            para.innerText = 'כל הכבוד, תשובה נכונה!'
             success++;
               stopTimer();
        }
    }
    if (trueFalse === false) {
        para.innerText = 'תרצה לנסות שוב?'
    }else if(success%5===0)
{
player.addLevel();
para.innerText = 'כל הכבוד, אתה מוכן לרמת גבוהה יותר!'
if(timeLimitPerQuestion>3)
{
timeLimitPerQuestion--;
}
}
localStorage.setItem('student',JSON.stringify(player));
let some=JSON.parse(localStorage.getItem('student'));
console.log(some);
})
helpBtn.addEventListener('click', ()=>{
    if(num1 && num2){
       let sum;
       switch (operator) {
           case '+':
               sum = num1 + num2;
               break;
           case '-':
               sum = num1 - num2;
               break;
               case '*':
                sum= num1 * num2;
                break;
                case '/':
                    sum = num1 / num2;
                    break;
       }
       result.value = sum;
    }
         check.disabled=true;
            stopTimer();
})