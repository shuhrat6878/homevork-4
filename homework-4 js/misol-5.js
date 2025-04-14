let son = parseInt(prompt('fibanachi uchun raqam kirgazing'));
let a =0;
let b = 1;
alert(a);
alert(b);

for (i=2; i<=son;i++){
    let c = a+b;
    alert(c);
    a=b;
    b=c;
}