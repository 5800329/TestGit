

const messave = 'Hi Arnon';
//messave = "Hi Hyde";
console.log('Messge : ', messave);

let message2;
message2 = 'Hi Hidato';
message2 = '555';

/*let อานนท์;
อานนท์ = 'Hi อานนท์';*/

//console.log('Message อานนท์',อานนท์);


let humen;
let name;
name = 'xxx';

humen = name;

console.log("Humen : ", humen);

const amount = 10000000000;
const dadname = 'Chaiyong';
const momname = 'Prapai';
const address = '302/240 ถนนเสรีไทย กรุงเทพฯ';
const ageuniverse = '100000 Milion'

console.log("Amount : ", amount);
console.log("Dad : ", dadname);
console.log("Mom : ", momname);
console.log("Address : ", address);
console.log("Age of Universe : ", ageuniverse);

console.log(typeof dadname);
console.log(typeof 13);

//  alert("Hello");
/*  console.log("test");
 var a = 10;
 var b = 30
 var c = a + b;
 console.log(c); */

//TestCAll();


const myname = 'อานนท์ คงมานะเกียรติคุณ';
const myage = '23';
const myaddress = '302/240 ถนนเสรีไทย กรุงเทพฯ';
let history = `ชื่อ : ${myname} 
อายุ : ${myage}
ที่อยู่ : ${myaddress} `;

console.log(history);

let value = "9" / "4.5";
console.log(typeof value);
console.log(value);

let value1 = "";
console.log(typeof value1);
let value2 = Number(value1);
console.log(typeof value2);

console.log("undefined :", Number(undefined));
console.log("null :", Number(null));
console.log("true :", Number(true));
console.log("false :", Number(false));
console.log(" :", Number(""));
console.log("  154  ", Number("  154  "));
console.log(" 1 5 4  :", Number(" 1 5 4 "));
console.log("140sss :", Number("140sss"));
console.log("434.23 :", Number("434.23"));



console.log("0 :", Boolean(0));
console.log(" :", Boolean(""));
console.log("null :", Boolean(null));
console.log("undefined :", Boolean(undefined));

console.log("NaN :", Boolean(NaN));
console.log("0 :", Boolean("0"));

console.log(" ", Boolean(" "));

let a = 1, b = 1;

console.log(++a);
console.log(b++);

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");

console.log("4px" - 2);
console.log(7 / 0);
console.log("-9" + 5);
console.log("-9" - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log("\t\n" + 2);


/* let year = prompt('ddddddddd');

if(year == 1998)
{
alert("ถูกต้อง");
alert("คุณเก่งมากๆ");
}
else
{
    alert("555");
} */


/* let ans = prompt('Age');

alert((ans == 37) ? 'ถูกต้อง' : 'เกือบแล้ว');

function TestCAll() {

    alert("Hello2");

} */

/* let yname = prompt('what your name!');
if (yname == "arnon") {
    alert('true');
}
else {
    alert('false');
} */
/* 
let point = prompt('what your point!');
if (point > 80) {
    alert('A');
}
else if (point > 70){
    alert('B');
}
else if (point > 60){
    alert('C');
}
else if (point > 50){
    alert('D');
}
else {
    alert('F');
}


 let yage = prompt('How old are you!');
 let price = (yage < 18) ? 2000 : 3500;
 alert(price); */

console.log("++++++++++++++++");

console.log(null || 2 || undefined);
//console.log( alert(1) || 2 || alert(3));
console.log(1 && null && 2);
//console.log(alert(1) && alert(2));
console.log(null || 2 && 3 || 4);

console.log(null);

console.log(2 || 3);

console.log(4);

/* 
 let pointage = prompt('what Age 18 - 60!');
if (pointage > 17 && pointage < 61) {
    alert('True');
}
else {
    alert('F'); 
}


let pointage2 = prompt('what Age not 18 - 60!');
if (pointage2 < 18 || pointage2 > 60) {
    alert('True');
}
else {
    alert('F'); 
} */
/* 
let user1 = prompt('Input Data User 1!');
while (user1 < 1 || user1 > 100) {
    user1 = prompt('Input Data User 1!');
}

let user2 = prompt('Input Data User 2!');
while (user2 < 1 || user2 > 100) {
    user2 = prompt('Input Data User 1!');
}

while (user1 != user2) {
    if (user1 > user2) {
        alert('user1 > user2');
    }
    else {
        alert('user1 < user2');
    }

    user2 = prompt('Input Data User 2!');

}

alert('ถูกแล้ว'); */
/* 
let aq = +prompt('a?', '');

switch (aq) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2||3');
        break;
    default:
        alert('Else');
} */

/* 
let ar = prompt('a?', '');

draw(ar);

function draw(n) {

    let b = '';
    for (let i = 1;i <= n; i++) {

        b += '*'

    }
    alert(b);
} */

/* 
let ask = (question,yes,no) =>{
if(confirm(question)) yes() 
else no();

}

function yes()
{
    alert('You agree');
}
function no()
{

    alert('You cancel');
}

ask('ddddd',yes,no); */
/* function compute() {
    let pkey = prompt('Key');
    let pvalue = '';

    let comp = {};

    while (pkey.toLowerCase() != "stop") {
        pvalue = prompt('Value');

        comp[pkey] = pvalue;

        pkey = prompt('Key');

    }

    console.log(comp);
} */

//compute();


/* 
let menu = {
    width: 200,
    height: 300,
    ddd:30,
    title: "My menu"
};

let xvalue = prompt('Value');
multiplyNumeric(menu, xvalue);

function multiplyNumeric(obj, avalue) {

    let clone = {};
    // ใช้ for..in..loop สำหรับแทนค่า key แต่ละตัว
    for (let key in obj) {
       
        if(typeof obj[key] == 'number')//number
        {
            clone[key] = obj[key] * avalue;
        }
        else{
            clone[key] = obj[key];
        }
    }
  
    console.log(clone);
} */
// after the call
/* let num = 255; 

alert( num.toString(16) ); // ff
alert( num.toString(2) ); // 11111111
alert( num.toString() ); // 255 */
//alert(Number(0.1) + Number(0.2)); // 0.30000000000000004

/* alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('12.3') ); // 12 ~ ส่งค่ากลับมาเฉพาะจำนวนเต็ม
alert( parseFloat('12.3.4') ); // 12.3 ~ ส่งค่ากลับมาเฉพาะจุดตัวแรก */


/* alert( Math.random() ); // 0.1234567899864
alert( Math.random() ); // 0.5435258423432
alert( Math.random() ); // ... (any random numbers) */

/* 
let mi = 1;
let ma = 5;



//alert(Math.random(1,5)); 

ran(mi,ma);

function ran(min,max)
{
   //Math.max(3, 5, -10, 0, 1); 
   //Math.min(1, 2, 5, 200) ; 
let ca = 10;



let ret = Math.trunc(Math.random() * ca);
   while(ret < min || ret > (max-1) )
   {
    ret = Math.trunc(Math.random() * 10);
   }
   alert(ret);
 
} */

/* for (let char of "Hello") {
    alert(char); // H,e,l,l,o 
  } */

//console.log("dddd \f\r dddddd"); // H,e,l,l,o 

//let str = 'Widget with id';

//alert( str.indexOf("id",2) ); // 12, เริ่มค้นหาจากตำแหน่งที่ 2

/* let str = "stringify";
alert( str.slice(2,3) ); // 'ringify', เลือกจากตำแหน่งที่ 2 จนถึงตัวสุดท้าย
alert( str.slice(-4, -1) ); // 'gif */
/* let yvalue = prompt('Value');
//ucFirst(yvalue);
checkSpam(yvalue);
function ucFirst(str) {
    let x = str;
    let fir = str[0];

    alert(fir.toUpperCase() + x.slice(1));

}

function checkSpam(str) {

    if (str.includes("xxx") || str.includes("viagra")) {
        alert(true);

    }
    else {
        alert(false);

    }


} */
/* 
alert(extractCurrencyValue('$eee120', 30.5) === 3660); // true

function extractCurrencyValue(str, rate) {

    let findchar = str;
    let i = 0;
    let pos = 0;
    while (findchar[i] && (i < str.length)) {
        if (typeof findchar[i]) {

            pos = i;
            break;
        }
i++;
    }
    alert(pos);
    let strs = parseInt(str.slice(pos));

    //alert(strs);
    return strs * rate;

} */
//aaaa();

function aaaa()
{
    let styles=['Jazz','Blues'];

    alert(styles);

    styles.push('Rock-n-Roll');

    styles[((styles.length)/2)-1] =  'Classics';
    styles.shift();
    styles.unshift('Rap','Reggae');

    alert(styles);

   /*  สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
เพิ่ม “Rock-n-Roll” ต่อท้าย

นำค่า Classics ไปทับค่าตรงกลางของ Array

นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array
 */

}

//sss();
function sss()
{
    let val = Number(prompt('value'));
let suma = 0;
let arr = [];
//alert(typeof val);
    while(!isNaN(val))
    {
        arr.push(val);
        suma = suma + val;
        val =  Number(prompt('value'));
    }
    alert(arr);
    alert(suma);
   /*  ใช้ propmt รับ value มาเก็บใน array
    หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
    คำนวณผลรวมของตัวเลขทั้งหมดใน Array
     */

}

/* let arr = ["I", "study", "JavaScript"];

// จาก index 2
// delete ทั้งหมด 0 ตัว (deleteCount = 0)
// เพิ่ม "complex" และ "language" เข้าไป
arr.splice(2, 0, "complex", "language");
let ddd = arr;
alert( arr ); */


/* 1.7 array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ]
  array2 ["apple London", "banana Bangkok", "watermelon Singapore"] */
/* let array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ]

  let array2 = array1.map(function(x) {return x.name + ' ' + x.surname})

alert(array2); */


/* 1.8 array1 = [1,3,4,5,6,7,8]
    array2 ["odd", "odd", "even", "odd", "even", "odd", "even"] */
/* let array1 = [1,3,4,5,6,7,8]
let array2 = array1.map(function(x) { return  (x % 2==1) ? 'odd' : 'even';})

alert(array2); */


/* 1.9 array1 = [1, -3, 2, 8, -4, 5]
    array2 [1, 3, 2, 8, 4, 5] */
/*   let array1 = [1, -3, 2, 8, -4, 5]
let array2 = array1.map(function(x) { return  Math.abs(x);}) 

alert(array2);*/

/* 1.10 array1 = [100, 200.25, 300.84, 400.3]
     array2 ["100.00", "200.25", "300.84", "400.30"] 
let array1 = [100, 200.25, 300.84, 400.3]
let array2 = array1.map(function (x) { return x.toFixed(2); })
alert(array2);*/

//1.7
let array17 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
]
let array27 = array17.map(function (x) { return x.name + ' ' + x.surname })
alert(array27);

//1.8
let array18 = [1, 3, 4, 5, 6, 7, 8]
let array28 = array18.map(function (x) { return (x % 2 == 1) ? 'odd' : 'even'; })
alert(array28);

//1.9
let array19 = [1, -3, 2, 8, -4, 5]
let array29 = array19.map(function (x) { return Math.abs(x); })
alert(array29);

//1.10
let array110 = [100, 200.25, 300.84, 400.3]
let array210 = array110.map(function (x) { return x.toFixed(2); })
alert(array210);

