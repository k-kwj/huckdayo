let p = Math.floor(Math.random()*151);
console.log(p);
const base = document.getElementById('h').innerHTML;
const A = document.getElementById('h1').innerHTML;
const AA = document.getElementById('a1').textContent;
const B = document.getElementById('h2').innerHTML
const BB = document.getElementById('a2').innerHTML;
const C = document.getElementById('h3').innerHTML;
const CC = document.getElementById('a3').textContent;
const D = document.getElementById('h4').innerHTML;
const DD = document.getElementById('a4').textContent;

const hoge = function (X) {
if(X === 0){
document.getElementById('h').innerHTML = A;
return AA;
}else if (X === 1){
  document.getElementById('h').innerHTML = B;
  return BB;
}else if(X === 2){
document.getElementById('h').innerHTML= C;
return CC;
}else if (X === 3){
  document.getElementById('h').innerHTML = D;
  return DD;
}
}

document.getElementById('header').addEventListener('click',function() {
  document.getElementById('menu').classList.toggle('active')
})
document.getElementById('close').addEventListener('click',function () {
  document.getElementById('menu').classList.remove('active');
})

let a = 0;
let b = 0;
let c = 0;
let d = 0;

const init = function () {
  if(a >= 3){
    a = a % 3;
  }
  if(b >= 10){
    b = b % 10;
  }
  if(a === 2 && b >= 4){
    a=0;
    b=0;
  }
  if(c>=6){
    c %=6;
  }
  if(d >= 10){
    d %= 10;
  }
  document.getElementById('p1').textContent=a;
  document.getElementById('p2').textContent=b;
  document.getElementById('p3').textContent=c;
  document.getElementById('p4').textContent=d;
}

document.getElementById('p1').addEventListener('click',function () {
a+=1;
init();});
document.getElementById('p2').addEventListener('click',function () {
b += 1;
init();});
document.getElementById('p3').addEventListener('click',function () {
  c += 1;
  init();});
document.getElementById('p4').addEventListener('click',function () {
  d += 1;
  init();
});

document.getElementById('set').addEventListener('click',function () {
  if(this.textContent === 'OFF'){
    this.textContent = 'ON';
  }else{
  this.textContent = 'OFF';
}
  this.classList.toggle('ready');
});

let j = 0;
setInterval(function () {
  const data = new Date();
  const H = data.getHours();
  const m = data.getMinutes();

  if(H === 10 *a + b && m === 10 * c + d && document.getElementById('set').textContent === 'ON'){
    document.getElementById('audio').play();
    if (j === 0){
      question();
    }
    j = 1;
  }},1000);


let XX;
const question = function() {
  let X =  Math.floor( Math.random()*4 );
   XX = hoge (X);


}


document.getElementById('post').addEventListener('click',function () {
  let value = document.getElementById('input').value;
  console.log(value);
  if(value === XX){
  document.getElementById('audio').pause();
  d -=1;
  setTimeout((function () {
    d +=1;
    j = 0;
  }),60000);
    document.getElementById('h').innerHTML='';
};
});
