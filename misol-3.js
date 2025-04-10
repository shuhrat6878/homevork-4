const son1 = parseInt(prompt('1- sonni kirgazing'));
const son2 = parseInt(prompt('2- sonni kirgazing'));
let amal = prompt(" +,-,*./   amalardan birini kirgazing");


switch(amal){
    case '+':
        let box = (son1 + son2);
        alert(box);
        break;
    case '-':
        let box1 = (son1 - son2);
        alert(box1);
        break;
    case '*':
        let box2 = (son1 * son2);
        alert(box2);
        break;
    case '/':
        let box3 = (son1 / son2);
        alert(box3);
        break;
    default:
        alert('xato amal kirgazdingizzzzzzz...')
}


