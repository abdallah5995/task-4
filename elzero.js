// window.onload = function () {
//   document.querySelector("h1").style.color = "blue";
// };
//7 Output To Screen
/*
        output to screen
  -window.alert()
  -document.write()
  -console.log()

  syntas
*/

// window.alert("hello from js file"); //مفيش حد  بيسخدمو كتير
//document.write("<h1>hello world </h1>");
//console.log("hello friends");

//8 Console Methods And Styling And Web API
/*
        -console methods
  -log 
  -error
  -table 

  console
  تبع 
  web api 

  styling console 
  -directive %c
*/

// console.log("log");
// console.error("error");
// console.table(["ahmed", "ali", "abdo"]);

// console.log("hello from %cjs file " , "color: red; font-size:30px;")

//9//What Is ECMAScript ?
/*
  ES6
*/

// var myName = "Osama";

// console.log("Hello " + myName);
// console.log(`Hello ${myName}`);

//1//Assignments

// document.querySelector("h1").style.color = "blue";
// document.querySelector("h1").style.fontSize = "80px";
// document.querySelector("h1").style.fontWeight = "bold";
// document.querySelector("h1").style.textAlign = "center";
// document.querySelector("h1").style.fontFamily = "Arial";

// console.log(
//   " %cElzero %cweb %cschool",
//   "color:red;",
//   "color:green; font-size:40px; ",
//   "color:blue;"
// );
// console.group("group1");
// console.log("message one");
// console.log("message two");
// console.groupCollapsed("child group");
// console.log("message one");
// console.log("message two");
// console.groupCollapsed("grand child group");
// console.log("message one");
// console.log("message two");
// console.groupEnd();
// console.group("group2");
// console.log("message one");
// console.log("message two");

// console.table(["ahmed", "ali", "hala", "abdo", "amr"]);

//10//Data Types And typeof Operator

/*
  Data Types Intro
  -string
  -number
  -array => object
  -object
  -boolean
*/

// console.log("abdallah mohamed");
// console.log(typeof "abdallah mohamed");
// console.log(typeof 5000);
// console.log(typeof [10, 15, 17]);
// console.log(typeof ['ab', "mo", "as"]);
// console.log(typeof {name:"abdallah", age:22, country:"eg"});
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);

//11//Variables Introduction

/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed // قارن 
*/

// var user = "abdallah" ,
//   age = 22 ;

// console.log(user);
// console.log(user);
// console.log(age);
// console.log(user);

// console.log(hello);
// hello.innerHTML = "abdo" ;

//13//Identifiers Name Conventions And Rules

/*
  Identifiers
  - Name Conventions And Rules
  - Reserved Words
*/

// var userName = "Sayed";
// console.log(userName);

// Var, Let, Const Compare

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/

//14//String Syntax And Character Escape Sequences

/*
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue
  \n
*/

// console.log("my names 'abdallah'");
// console.log('my names "abdallah"');
// console.log("my names 'abdallah'");
// console.log("my \\ names 'abdallah'");
// console.log(
//   "my \
//   names \
//   abdallah"
// );
// console.log("my\names\abdallah")
// console.log("my\nnames\nabdallah")

//15//Concatenation

/*
  Concatenation
*/

// let a = "we love";
// let b = "javascript";

// document.write(a + " " + b);
// console.log(a, b)

//16//Template Literals (Template Strings)

/*
  Template Literals (Template Strings)
*/

//first Template
// let a = "we love";
// let b = "javascript";
// let c = "and";
// let d = "programming";

// console.log(a + "\"\" " + b +
//   "\n " + c + " " + d);

// console.log(`${a} ${b} "" '' \\
//   ${c} ${d}`);
// let title = "Elzero";
// let desc = "Elzero Web School";
// let markup = `
//   <div class="card">
//     <div class="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;

// document.write(markup);

//17//Variables And Concatenation Challenge

// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
//repeat
// - Use ES6 Repeat

// var title = "Elzero";
// description = "Elzero Web School";
// date = "25/10";
// markup = `
// <div class ="card">
//   <h3>${title}</h3>
//   <p>${description}</p>
//   <span>${date}</span>
//   </div>
// `;
// document.write(markup.repeat(4));

//2//Assignments

// var numberOne = 10 ;
// var numberTwo = 20 ;

// console.log(numberOne , numberTwo );
// console.log(typeof(numberTwo + numberOne));
// console.log(` ${numberOne + numberTwo}`);
// console.log(`${typeof numberOne} ${typeof numberTwo}`)
// console.log(numberOne + "\n" + numberTwo);
// console.log(`${numberOne}
// ${numberTwo}`);

// var elzero = ["ahmed"];

// console.log(typeof elzero);
// console.log(elzero.innerHTML);//لم اعرف

// console.log(`I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \\"""\\"""
// ""JavaScript""`);

// let a = 21;
// let b = 20;
// console.log(`_`+`${a}_${b}`.repeat(4)+`_`)

//18//Arithmetic Operators

/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/

// console.log(10 + 20);
// console.log(10 + "Osama");

// console.log(10 - 20);
// console.log(10 - "Osama"); // NaN
// console.log(typeof NaN);

// console.log(10 * 20);
// console.log(10 * -20);

// console.log(20 / 5);
// console.log(20 / 3);

// console.log(2 ** 4);
// console.log(2 * 2 * 2 * 2);

// console.log(10 % 2);
// console.log(11 % 2); // Remove 1

//19//Unary Plus And Negation Operators
/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
//Unary Plus
// console.log(+100);//100
// console.log(+"100");//100
// console.log(+"-100");//-100
// console.log(+"Osama");//nan
// console.log(+"15.5");//15.5
// console.log(+0xff);//255
// console.log(+null);//0
// console.log(+false);//0
// console.log(+true);//1
// //Unary Negation
// console.log(-100);//-100
// console.log(-"100");//-100
// console.log(-"-100");//100
// console.log(-"Osama");//nan
// console.log(-"15.5");//-15.5
// console.log(-0xff);//-255
// console.log(-null);//-0
// console.log(-false);//-0
// console.log(-true);//-1

// console.log(Number("100"));

//20//Type Coercion
/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

// let a = "100";
// let b = 20;
// let c = true;

// console.log(+a + b + c);

//21//Assignment Operators

// let a = 10;

// a = a + 10;
// a += 30
// a-=10

// console.log(a);

//22//Operators Challenges
//Challenge 1

// let a = 10;
// let b = "20";
// let c = 80;
// console.log(++a + +b++)
// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
[++a] [+]
[++a]
- value:
- explain:
[+]
explain:
*/

//Challenge 2

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e);//2000
// console.log(g**);//173

// Assignments 17-22
//1
// console.log( 10 * 20 + 15 % 3 + 190 + 10 - 400);
//2
// let a = 3;
// console.log(a + a);
// console.log(++a + true + true);
// console.log(a * (true +true) );
// console.log(a * --a );
// console.log(a + ++a - true);
// console.log(++a + +true + true );
//3
// let a = "10";
// console.log(+a + +a );
// console.log(+a + +a * true);
// console.log(+a + +a + +a - a);
// console.log(++a + --a - true);
//4
// let a = 10;
// console.log(++a + true + true)
// console.log(--a - true)

//23//Number

/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

// console.log(1000000);
// console.log(1_000_000);

// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.0);

// console.log(Number.MAX_SAFE_INTEGER);//اكبر رقم امان
// console.log(Number.MAX_VALUE);//اكبر رقم في اللغه

//24//Number Methods
// Methods//هي الاجراءات الجهزه اللي بتنفذ سلوك معين
/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()//بترجع string
  بتحلل البيانات 
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]//هل دا عدد صحيح بيطلع صح او خطا
  - isNaN() [ES6]
*/

// console.log((100).toString());
// console.log(100..toString());

// console.log(100.555555.toFixed(2));

// console.log(Number("100 abdo"));//nan
// console.log(+("100 abdo"));//nan
// console.log(parseInt("100 abdo"));//100
// console.log(parseInt("abdo 100 abdo"));//nan

// console.log(parseFloat("100.500 abdo"));//100.500
// console.log(parseInt("100.500 abdo"));//100//هنا مش بترجه الكسور
// console.log(Number.isInteger("100"));//false
// console.log(Number.isInteger(100.500));//false
// console.log(Number.isInteger(100));//true

// console.log(Number.isNaN(100));//false

//25//Math Object

/*
  Math Object
  - round()//لو الرقم تحت النص بيقربه لاقل حاجه تحت 
  //لو الرقم النص او اكتر هقربه لاعلي قيمه 
  - ceil()
  - floor()
  - min()//اقل رقم 
  - max()//اعلي رقم
  - pow()هنا بديلو اس الرقم 
  - random()بنطلع منه رقم عشوائي 
  - trunc() [Es6]//بيشيل الكسور
*/

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 30, 50, -100));
// console.log(Math.max(10, 20, 30, 50, -100));

// console.log(Math.pow(2, 4));

// console.log(Math.random());

// console.log(Math.trunc(99.5));

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

//1
// console.log(Math.trunc(a, b, c, d))

//2
// console.log(a ** parseInt(d));

//3
// console.log(Math.trunc(d));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(parseInt(d));

//4
// console.log(+ (( Math.floor(b) / Math.ceil(d) ).toFixed(2)));
// console.log(Math.ceil(b) / Math.ceil(d));

//27//String Methods Part 1

/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length//عدد العنصر
  - trim()//بتشيل المسافات
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

// let theName = "  abdo  ";

// console.log(theName);
// console.log(theName[1]);
// console.log(theName[5]);

// console.log(theName.charAt(1));
// console.log(theName.charAt(5));

// console.log(theName.length);

// console.log(theName.trim());

// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());

// console.log(theName.trim().charAt(2).toUpperCase())

//28//String Methods Part 2

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)//بيقطع
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));//7
// console.log(a.indexOf("o"));//5

// console.log(a.lastIndexOf("Web"));//7
// console.log(a.lastIndexOf("o"));//15

// console.log(a.slice(2, 6));
// //لو عاوز اقطع من الاخر باستخدم السالب
// console.log(a.slice(-5));

// console.log(a.repeat(5));

// console.log(a.split(" "))

//29//String Methods Part 3

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

// let a = "Elzero Web School";

// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));//لو هنا انا عكست الارقام بيرجع العكس
// console.log(a.substring(-10, 6));//اكني بقوله من //6-0
// console.log(a.substring(a.length - 5, a.length - 3));

// console.log(a.includes("Web", 0));//هنا انا لقول هل القيمه دي بتحتوي ع كذا//true
// console.log(a.startsWith("E", 0))//هنا انا لقوله هل القيمه بتبدا بحرف او كلمه كذا
// console.log(a.endsWith("o"))//هنا انا بقوله هل الحرف دا بينتهي بالحرف دا او كلمه كذا

//30//string challenge

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(a.split( " " )[0].charAt(2).toUpperCase().concat(a.slice(3,6)) ); // Zero

// // 8 H
// console.log(a.charAt(a.indexOf("h")).repeat(8).toUpperCase()); // HHHHHHHH

// // Return Array
// console.log([a.slice(0,6)]) ;// ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(); // Elzero School

// // Solution Must Be Dynamic Because String May Changes
// console.log(
//   a[0].toLowerCase() +
//   a.slice(1, a.length - 1).toUpperCase() +
//   a.slice(-1).toLowerCase()
// );

//31//Comparison Operators

/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/
//true or fales
// هنا بقارن بين القيمه فقط
// console.log(10 == "10");//هنا انا بقول هل يساوي
// console.log(10 != "10");//هنا انا بقول مش بتساوي

// console.log(10 === "10");//هنا بتقارن بين القيمه و النوع
// console.log(10 !== "10");//هنا انا بقول النوع زي النوع ولازم يكونه مختلفين

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10);
// console.log(10 <= 10);

//سوال انترفيو

// console.log(typeof"ahmed" === typeof"ahmed");

//32//Logical Operators

/*
  Logical Operators
  - ! Not // لا
  - && And // و 
  - || Or // او 
*/

// console.log(true);
// console.log(!true);

// console.log(!(10 == "10"));

// console.log(10 == "10" && 10 > 8);

// console.log(10 || "10" || 10 > 8 || 10 > 50);

//33//If Conditions

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "syria";

// if(discount === true){
//   price -= discountAmount;
// }else if(country === "KSA"){
//   price -= 10;
// }else  if(country === "egypt"){
//   price -= 50;
// }else{
//   price -= 40;
// }

// console.log(price);

//34// Nested If Condition

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "Egypt";
// let student = false;

// if (discount === true) {

//   price -= discountAmount;//70

// } else if (country === "Egypt") {

//   if (student === true) {

//     price -= discountAmount + 30;//40

//   } else {

//     price -= discountAmount + 10;//60

//   }

// } else {

//   price -= 10;//90

// }

// console.log(price);

//35//Conditional Ternary Operator

// // let theName = "Mona";
// // let theGender = "Female";
// // let theAge = 30;

// // if (theGender === "Male"){
// //   console.log("Mr");
// // }else {
// //   console.log("Mrs");
// }

// // condition // المختصر
// // ? if  true : if false

//   theGender === "Male" ? console.log("Mr") : console.log("Mrs");
// //or// اخزينه في متغير
// let result = theGender === "Male" ? "Mr" : "Mrs";
// document.write(result);
// //or
// console.log(theGender === "Male" ? "Mr" : "Mrs");
// //or
// console.log(`hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 60
//   ? console.log("20 To 60")
//   : theAge > 60
//   ? console.log("Larger Than 60")
//   : console.log("Unknown");

//36//Nullish Coalescing Operator & Logical Or

/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = 0;

// console.log(`The Price Is ${price || 200}`);
// console.log(`The Price Is ${price ?? 200}`);

//38//Switch Statement

/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

// let day = "A";

// switch (day) {
//   default:
//     console.log("Unknown Day");
//     break;
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
// }

//39//Switch And If Condition Challenge

//[ 3 ] تكليفات خاصة ب [ Comparison & Logical Operators ]

//1
// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(! -50 >= +"-40"); // true
// console.log(! 10 <= -"-40"); // true
// console.log(! "10" <= 10); // true
// console.log(! 20 >= false); // true

//2

// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2); // true
// console.log( num2 > num1); // true
// console.log(! (num2 === num1)); // true
// console.log(num2 >= num1); // true
// console.log(num1 !== num2); // true
// console.log(num1 <= num2); // true

//3

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a == b); // true
// console.log(a < b && a > c); // true
// console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

//4
// let num = 9; // "009"

// if (num < 10) {
//   console.log(`00${num}`);
// }

// let num = 20; // "020"

// if (num > 10 && num < 100) {
//     console.log(`0${num}`);
//   }

// let num = 110; // "110"

// if(num >= 100){
//   console.log(num);
// }

//5

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if(num1 == str){
//   console.log("{num1} Is The Same Value As {str}");
// }

// if(typeof num1 !== typeof str){
//   console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// }

// if(typeof num1 != typeof str2){
//   console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
// }

// if( str !==  str2){
//   console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }

//6

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if(num3 > num1 && typeof num3 !== typeof num2){
//   console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
// }

// if(+num3 > num1 && +num3 === num2 && ! typeof +num3 !== typeof num2){
//   console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// }

// if(num3 !== num1 && typeof num3 !== typeof num1 && num3 !== num2){
//   console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
// }

//40//Array Big Introduction
/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// console.log(`hello ${myFriends[0]}`);
// console.log(`hello ${myFriends[1]}`);
// console.log(`hello ${myFriends[2]}`);
// console.log(`hello ${myFriends[1][2]}`);
// console.log(`hello ${myFriends[3][1]}`);
// console.log(` ${myFriends[3][1][2]}`);

// console.log(myFriends);
// myFriends[1]="kamel";
// //هنا انا بغير
// console.log(myFriends);
// myFriends[3]=["amr", "omer"];
// console.log(myFriends);

// console.log(Array.isArray(myFriends));//هنا انا بعرف ان دي arryarولا لا

//41//Using Length With Array

/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
// myFriends.length = 2;
// console.log(myFriends.length)//4

//42//Add And Remove From Array

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("abdo", "amr");

// console.log(myFriends);

// myFriends.push("hala", "body");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);

//43//Searching Array

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

//

// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.indexOf("Ahmed", 2));

// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", -2));

// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Ahmed", 2));

// if (myFriends.lastIndexOf("Osama") === -1) {
//   console.log("Not Found");
// }

// console.log(myFriends.indexOf("Osama"));
// console.log(myFriends.lastIndexOf("Osama"));

//44//Sorting Array

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// console.log(myFriends.sort());//بترتب ترتيب ابجدي
// console.log(myFriends.reverse());// هنا عكس التانيه

//45//Slicing Array

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// console.log(myFriends.slice(-4, -2));
// console.log(myFriends);

// myFriends.splice(1, 2, "Sameer", "Samara");

// console.log(myFriends);

//46//Joining Arrays

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());

// Assignments For Lessons 40 To 47

//1
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.splice(num, true);
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//2
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here

// friends.pop();
// friends.shift();
// console.log(friends); // ["Eman", "Osama"]

//3
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// console.log(finalArr.concat(arrOne, arrTwo ).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

//4
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// console.log(words.pop()[0].slice(website.length).toUpperCase());

//5
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// console.log(haystack.indexOf("JS") !== -1 ? "Found" :"Not Found");
// console.log(haystack.lastIndexOf("JS") !== -1 ? "Found" :"Not Found");
// console.log(haystack.includes("JS") ? "Found" :"Not Found");

//6
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs = allArrs.concat(arr1, arr2) //["A", "C", "X", "D", "E", "F", "Y"]
//   .sort()                            //["A", "C", "D", "E", "F", "X", "Y"]
//   .slice(-arr1.length)               // -arr1.length = -3 -> ["F", "X", "Y"]
//   .join("")                          // "FXY"
//   .toLowerCase();                    // "fxy"

// console.log(allArrs);

//48//Loop – For and The Concept Of Loop

/*
  Loop// تكرار
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//49//Loop On Sequences

/*
  Loop
  - Loop On Sequences
*/
//
// let myFriends = [1, 4,"Osama", "Ahmed", "Sayed", "Ali", "Amira"];
// let onlyNames = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "number") {
//     onlyNames.push(myFriends[i]);
//   }
// }
// console.log(onlyNames);
// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

//50//Live reload enabled.

/*
  Loop
  - Nested Loops
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15))
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15))
//   for (let j = 0; j < colors.length; j++) {
//     console.log(colors[j]);
//   }
//   for (let g = 0; g < models.length; g++) {
//     console.log(models[g]);
//   }
// }

//51//Loop Control – Break, Continue, Label

/*
  Loop Control
  - Break
  - Continue
  - Label
*/

// let products = ["Keyboard",2, 5, 5, "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   if (products[i] === "Pen") {
//     break;
//   }
// }//ملحوظه لو الاف جت بعد الطباعه هيطبع الكلمه معاه ولو قبله هتتحذف الكلمه

// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === "number") {
//     continue;
//   }
//   console.log(products[i]);
// }

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break mainLoop;
//     }
//   }
// }

//52//Loop For – Advanced Example

/*
  Loop For Advanced Example
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;

// for (;;) {
//   console.log(products[i]);
//   i++;
//   if (i === products.length) break;
// }

//53//Practice – Add Products To Page

/*
  Products Practice
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

//57//Function Intro And Basic Usage

/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

// function sayHello(userName) {
//   console.log(`Hello ${userName}`);
// }
// sayHello("Abdullah");
// sayHello("Ali");
// sayHello("Amr");

//58//Function Advanced Example

/*
  Function Advanced Examples
*/

// function sayHello(userName , age) {
//   if (age < 20){
//     console.log("the app is not for you");
//   }
//   else{
//     console.log(`Hello ${userName} your age is ${age}`);
//   }
// }
// sayHello("Abdullah", 22);
// sayHello("Amr", 32);
// sayHello("Ali", 15);

// function generateYears(start, end, exclude) {
//   for (let i = start ; i <= end ; i++) {
//     if (i === exclude) {
//       continue
//     }
//     console.log(i)
//   }
// }
// generateYears(2002 , 2024 , 2020);

//59//Function Return Statement And Use Cases

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

// function generateYears(start, end) {
//   for (let i = start ; i <= end ; i++) {
//     if (i === 15) {
//       return `Interrupting`;
//     }
//     console.log(i)
//   }
// }
// generateYears(10 , 20 );

//60//Function Default Parameters

/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

// function sayHello(userName, age = "Unknown") {
//   // if(age === undefined){
//   //   age = "Unknown" ;
//   // }
//   // age = age || "Unknown"
//   return `Hello ${userName} your age is ${age}`;
// }
// console.log(sayHello("Abdullah"));

//60//Function Rest Parameters

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

// function calc(...numbers) {
//   // console.log(Array.isArray(numbers));
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]; // result = result + numbers[i]
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50, 30));

//61//Practice – Ultimate Function

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>Skills: No Skills</p>`);
//     }
//   } else {
//     document.write(`<p>Skills Is Hidden</p>`);
//   }
//   document.write(`</div>`);
// }

// showInfo("Osama", 38, 20, "No", "Html", "CSS");

//62//Random Arguments Function Challenge

//مهم جدا

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//تكليفات JavaScript Bootcamp من الدرس 057 إلى 063

//1
// function sayHello(theName, theGender) {
//   if(theGender === "Male") {
//     console.log(`Hello Mr ${theName}`);
//   }
//   else if(theGender === "Female"){
//     console.log(`Hello Mrss ${theName}`);
//   }
//   else{
//     console.log(`Hello  ${theName}`);

//   }
// }
// sayHello("Osama", "Male");
// sayHello("Eman", "Female");
// sayHello("Sameh");

//2
// function calculate(firstNum, secondNum, operation) {
//   let result = 0 ;
//   if (!secondNum) {
//     console.log("Second Number Not Found");
//     return;
//   }
//   switch(operation) {
//     case 'subtract' :
//       result = firstNum - secondNum ;
//     break;
//     case 'multiply' :
//     result = firstNum * secondNum ;
//     break;
//     default:
//     result = firstNum + secondNum;
//     break;
//   }
//   console.log(result);
// }

// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply');//600

//3
// function ageInTime(theAge) {
//   if (theAge < 10 || theAge > 100) {
//     console.log(`Age Out Of Range ${theAge}`)
//   }
//   console.log(`age ${theAge * 12}days`);
//   console.log(`age ${theAge * 365 / 7}hours`);
//   console.log(`age ${theAge * 365 * 24 * 60 }minutes`);
//   console.log(`age ${theAge * 365 * 24 * 60 * 60}seconds`);

// }
// ageInTime(110); // Age Out Of Range
// ageInTime(22); // Months Example => 456 Months

//4
//تحدي
//حلوه عن المراجعه

//5

// function createSelectBox(startYear, endYear) {
//   document.write(`<select>`);
//   for(let i =  startYear ; i <= endYear ; i++) {
//     document.write(`<option value = "${i}"> ${i} </option>`);
//   }
//   document.write(`</select>`);
// }
// createSelectBox(2000, 2021);

//6
// function multiply(...nums) {
//   result = 1;
//   for(let i = 0; i < nums.length; i++) {
//     if(typeof nums[i] === "string") continue;

//     result*=parseInt( nums[i] );
//   }
//   console.log(result);
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000

//64//Anonymous Function and Use Cases

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

// let calculator = function (num1, num2){
//   return num1 + num2;
// }
// console.log(calculator(20, 30));

// function sayHello() {
//   console.log("Hello Osama");
// }
// sayHello();

// document.getElementById("show").onclick = function sayHello() {
//   document.write("hello abdo")
// }
// setTimeout(function elzero(){
//   console.log("good");
// },2000);

//65//Return Nested Function

/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1
// function sayMessage (fName, lName) {
//   let message = `hello`;
//   //nested function
//   function concatMsg() {
//     message = ` ${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message ;
// }
// console.log(sayMessage("abdallah", "mohamed"));

// Example 2

// function sayMessage (fName, lName) {
//   let message = `hello`;
//   //nested function
//   function concatMsg() {
//     return` ${message} ${fName} ${lName}`;
//   }

//   return concatMsg();
// }
// console.log(sayMessage("abdallah", "mohamed"));

// Example 3

// function sayMessage (fName, lName) {
//   let message = `hello`;
//   //nested function
//   function concatMsg() {
//     return` ${message} ${getFullName()} `;
//     function getFullName (){
//       return `${fName} ${lName}`;
//     }
//   }
//   return concatMsg();
// }
// console.log(sayMessage("abdallah", "mohamed"));

//66//Arrow Function Syntax

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// let print = function () {
//   return 10;
// };

// let print = () => 10;

// let print = function (num) {
//   return num;
// };

// let print = num => num;

// let print = function (num1, num2) {
//   return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;

// console.log(print(100, 50));

//67//Scope – Global And Local

/*
  Scope
  - Global And Local Scope
*/

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText()

//68//Scope – Block

/*
  Scope
  - Block Scope [If, Switch, For]
*/

// var x = 10;

// if (10 === 10) {
//   let x = 50;
//   console.log(`From If Block ${x}`);
// }

// console.log(`From Global ${x}`);

//69//Scope – Lexical (Static)

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

// function parent() {
//   let a = 10;

//   function child() {
//     console.log(a);
//     console.log(`From Child ${b}`);

//     function grand() {
//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();

//70
//تحدي للمراجعه

//تكليفات JavaScript Bootcamp من الدرس 64 إلى 70

//1

// function getDetails (zName, zAge, zCountry) {
//   function namePattern (zName) {
//     let fName = zName.split(" ")[0]  ;
//     let lName = zName.split(" ")[1][0].toUpperCase();
//     return `${fName} ${lName}`;

//   }
//   function ageWithMessage (zAge) {
//     let age = zAge;
//     return `Your Age Is ${age}`;
//   }
//   function countryTwoLetters (zCountry) {

//     return zCountry.slice(0, 2).toUpperCase();

//   }
//   function fullDetails () {
//     return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
//   }
//   return fullDetails();
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

//2

// let itsMe = () => `Iam A Normal Function`;
// console.log(itsMe());

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org"));

//3
//تحدي للمراجعه

//4
//للمراجعه

//71//Higher Order Functions – Map

/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

// let myNums = [1, 2, 3, 4, 5, 6];
// let newArry = [];

// for(let i = 0; i < myNums.length; i++) {
//   newArry.push( myNums[i] + myNums[i] );
// }
// console.log(newArry);

// let addSelf = myNums.map(function(element, index, array){
//   console.log(`element ${element}`);
//   console.log(`index ${index}`);
//   console.log(`array ${array}`);
//   console.log(`this ${this}`);
//   return element + element;
// },10);
// console.log(addSelf);

// function addition(ele){
//   return ele + ele
// }

// let add = myNums .map(addition);

// console.log(add);

//72//Higher Order Functions – Map Practice

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

// let sw = swappingCases
//   .split("")
//   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//   .join("");

// console.log(sw);

// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });

// console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ign);

//73//Higher Order Functions – Filter

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filterdFriends = friends.filter(function (el) {
//   return el.startsWith("A") ? true : false;
// });

// console.log(filterdFriends);

// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function (el) {
//   return el % 2 === 0;
// });

// console.log(evenNumbers);

//74//Higher Order Functions – Filter Practice

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters

// let sentence = "I Love Foood Code Too Playing Much";

// let names = sentence.split(" ").filter(function(el){
//   return el.length <= 4 ;
// }).join(" ");

// console.log(names);

// Ignore Numbers

// let ignoreNumbers = "Elz123er4o";
// let numbers = ignoreNumbers.split("").filter(function(el){
//   return isNaN(parseInt(el));
// }).join("");

// console.log(numbers);

// Filter Strings + Multiply
// let mix = "A13BS2ZX";

// let min = mix.split("").filter(function(el){
//   return !isNaN(parseInt(el));

// })
// .map(function(el){
//   return el * el ;
// }).join("");

// console.log(min);

//75//Higher Order Functions – Reduce

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc + current;
// }, 5 /*initialValue */
// );

// console.log(add);

//76//Higher Order Functions – Reduce Practice

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// let check = theBiggest.reduce(function (acc, current) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(acc.length > current.length ? acc : current);
//   console.log(`#############`);
//   return acc.length > current.length ? acc : current;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });

// console.log(finalString);

//77//Higher Order Functions – ForEach And Practice

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     // Remove Active Class From All Elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add Active Class To This Element
//     this.classList.add("active");
//     // Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });

//تكليفات JavaScript Bootcamp من الدرس 71 إلى 78

//1
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let min = mix.map(function(el){
//   return isNaN(parseInt(el)) ? el : "" ;
// }).join("");

// console.log(min);

//2
// let myString = "EElllzzzzzzzeroo";
// let string = myString.split("").filter(function(el, index, arr ){
//   return (el === arr[index - 1]) ? false : true   ;
// }).join("");

// console.log(string)

//3

// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let array = myArray.reduce(function(word, el){
//   return word + el  ;
// })
// console.log(array);

//4
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let num = numsAndStrings.filter(function(el){
//   return  !isNaN(parseInt(el)) ;
// }).map(function(el){
//   return -el ;
// })

// console.log(num);

//5
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let add = nums.reduce(function (acc, current) {
//   if (current % 2 === 0){
//     return acc*current ;
//   }
//   else{
//   }
// }, 1
// );

// console.log(add);

//79//Object – Introduction

/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

// let user = {
//   // Properties
//   theName: "Osama",
//   theAge: 38,
//   // Methods
//   sayHello: function () {
//     return `Hello`;
//   },
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());

//80//Dot Notation vs Bracket Notation

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

// let myVar = "country";

// let user = {
//   theName: "Osama",
//   country: "Egypt",
// };

// console.log(user.theName);
// console.log(user.country); // user.country
// console.log(user.myVar); // user.country
// console.log(user[myVar]); // user.country

//81//Nested Object And Advanced Examples
/*
  Object
  - Nested Object And Trainings
*/

// let available = true;

// let user = {
//   name: "Osama",
//   age: 38,
//   skills: ["HTML", "CSS", "JS"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]); // Access With Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);

// console.log(user.checkAv());

//82//Create Object With New Keyword

/*
  Object
  - Create With New Keyword new Object();
*/

// let user = new Object({
//   age: 20,
// });

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());

//83//This Keyword

/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

// console.log(this);
// console.log(this === window);

// myVar = 100;

// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();

// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let user = {
//   age: 38,
//   ageInDays: function () {
//     console.log(this);
//     return this.age * 365;
//   },
// };

// console.log(user.age);
// console.log(user.ageInDays());

//84//Create Object With Create Method

/*
  Object
  - Create Object With Create Method
*/

// let user = {
//   age: 20,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(user);

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

//85//Create Object With Assign Method

/*
  Object
  - Create Object With Assign Method
*/

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 100,
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;
// finalObject.prop4 = 4;

// console.log(finalObject);

// let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

// console.log(newObject);

//تكليفات JavaScript Bootcamp من الدرس 079 إلى 085

//opp

//86//What Is DOM ? And Select Elements

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElement = document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElements[1]);
// console.log(myClassElement[1]);
// console.log(myQueryElement);
// console.log(myQueryAllElement[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);

//87//Get, Set Elements Content And Attributes

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/
//html
/* <div class="js">Javascript<span>Div</span> &lt;span&gt;</div>
<img src="" alt="">
<a class="link" href="#">Google</a> */
// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text from <span>Main.js</span> File";
// myElement.textContent = "Text from <span>Main.js</span> File";

// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Picture";
// document.images[0].id = "Pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "http://facebook.com");
// myLink.setAttribute("title", "facebook");

//88//Check Attributes And Examples
//html

// <div>Div</div>
// <p class="para" title="paragraph" data-src="testing">Paragraph</p>

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

// console.log(document.getElementsByTagName("p")[0].attributes);
// let myP = document.getElementsByTagName("p")[0];
// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log(`Not Found`);
// }

// if (myP.hasAttributes()) {
//   console.log(`Has Attributes`);
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//   console.log(`Has Attributes`);
// } else {
//   console.log(`Div Has No Attributes`);
// }

//89//Create And Append Elements

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-cudtom");
// let myText = document.createTextNode("Product One")
// let myComment = document.createComment("This Is Div")

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-text", "Texting");

// // Append comment TO Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText)

// // Append Element To Body
// document.body.appendChild(myElement);

//90//Product With Heading And Paragraph Practice

/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

// let myElement = document.createElement("div");
// let myHeading = document.createElement("h3");
// let myPra = document.createElement("p");
// let myHeadingText = document.createTextNode("Product Title");
// let myPraText = document.createTextNode("Product Description");

// //append class name
// myElement.className = "product"
// //append text and in element
// myHeading.appendChild(myHeadingText);
// myElement.appendChild(myHeading);
// myPra.appendChild(myPraText);
// myElement.appendChild(myPraText);

// document.body.appendChild(myElement);

//91//Deal With Childrens
//html
/* <div><!-- Osama -->Hello Div<p>Hello P</p><span>Hello Span</span><!-- Comment -->Hello</div> */
/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

//92//DOM Events
//html
/* <button>Button</button>
<hr>
<form action="">
  <input type="text">
  <input type="submit" value="Submit Data">
</form> */
/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

// let myBtn = document.getElementById("btn");

// myBtn.onmouseleave = function () {
//   console.log("Clicked");
// };

// window.onresize = function () {
//   console.log("Scroll");
// };

//93//Validate Form And Prevent Default
//html
/* <form action="">
<input type="text" name="username" placeholder="max 10 chars only">
<input type="text" name="age" placeholder="cant be empty">
<input type="submit" value="Submit Data">
</form>

*/

/* 
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

//تكليفات JavaScript Bootcamp من الدرس 86 إلى 93
//1
// let a = document.querySelector("div");
// let b = document.querySelector("#elzero");
// let c = document.querySelector(".element");
// let d = document.querySelector("[name= 'js']");
// let e = document.querySelectorAll("div")[0];
// let f = document.querySelectorAll("#elzero")[0];
// let g = document.querySelectorAll(".element")[0];
// let h = document.querySelectorAll("[name= 'js']")[0];
// let j = document.getElementsByTagName("div")[0];
// let k = document.getElementsByClassName("element");
// let i = document.getElementById("elzero");
// let l = document.getElementsByName("js")[0];
// let m = document.body.firstElementChild;
// let n = document.body.children[0];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(j);
// console.log(j);
// console.log(i);
// console.log(m);
// console.log(n);

//2

// let imgs = document.querySelectorAll("div img");
// //modifiy each <img> element
// imgs.forEach((image)=>{
//   image.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   image.alt = "Elzero Logo";
// });

//3
// let myInput = document.querySelector("input");
// let result = document.getElementsByClassName("result")[0];

// myInput.oninput = function(){
//   result.innerHTML = `${myInput.value} USD Dollar = ${(myInput.value * 49.25).toFixed(2) } Egyptian Pound`;
// }

//4

// let divOne = document.querySelector(".one");
// let divTwo = document.querySelector(".two");

// divOne.title = divOne.className;
// divTwo.title = divTwo.className;
// divOne.textContent = divOne.className;
// divTwo.textContent = divTwo.className;
// console.log(divOne);
// console.log(divTwo);

//5

// let myImg = document.querySelectorAll("img");

// for(let i = 0; i < myImg.length; i++){
//   if (myImg[i].hasAttribute("alt")) {
//   myImg[i].alt = "Old" ;
//   }else{
//   myImg[i].alt = "Elzero New" ;
//   }
// }
// console.log(myImg);

//6
// let elNum = document.getElementsByName("elements")[0];
// let form = document.forms[0];
// let type = document.querySelector("select");
// let text = document.getElementsByName("texts")[0];
// let results = document.querySelector(".results");

// form.onsubmit = function(el) {
//   el.preventDefault();

//   // إزالة العناصر القديمة
//   document.querySelectorAll(".box").forEach(el => el.remove());

//   // إنشاء العناصر الجديدة
//   for (let i = 1; i <= elNum.value; i++) {
//     let myEl = document.createElement(type.value);
//     let myText = document.createTextNode(text.value);

//     myEl.className = "box";
//     myEl.title = "Element";
//     myEl.id = `id-${i}`;
//     myEl.appendChild(myText);

//     myEl.style.display = "inline-block";
//     myEl.style.width = "200px";
//     myEl.style.margin = "20px";
//     myEl.style.padding = "10px";
//     myEl.style.color = "white";
//     myEl.style.backgroundColor = "blue";
//     myEl.style.textAlign = "center";
//     myEl.style.borderRadius = "10px";

//     // إضافة العنصر إلى النتائج
//     results.appendChild(myEl);
//   }
// };

// // تخصيص مظهر المدخلات
// let input = document.querySelectorAll(".input");
// let submit = document.querySelector("[type='submit']");

// for (let i = 0; i < input.length; i++) {
//   input[i].style.display = "block";
//   input[i].style.boxSizing = "border-box";
//   input[i].style.width = "250px";
//   input[i].style.padding = "10px";
//   input[i].style.margin = "15px";
// }

//94//Event Simulation – Click, Focus, Blur
/*
html
    <form action="">
      <input type="text" class="one">
      <input type="text" class="two">
      <input type="submit" value="Submit Data">
    </form>
    <a href="https://google.com" target="-blank">Google</a>
*/
/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function(){
//   two.focus();
// }

// one.onblur = function () {
//   document.links[0].click();
// };

//95//ClassList Object and Methods
/*
html
  <div id="my-div" class="on two show test">Div With Many Classes </div>

*/
/*
  DOM [Class List]
  - classList
  --- length
  --- contains---(Search Class)
  --- item---(index)
  --- add
  --- remove
  --- toggle--- = (add & remove)
*/

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));

// element.onclick = function () {
//   element.classList.toggle("show");
// };

//96//CSS Styling And Stylesheets

/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/

// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");

//97//Before, After, Prepend, Append, Remove

/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]//في الاخر
  - prepend [Element || String]//في الاول 
  - remove
*/

// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");

// element.remove();

//98//DOM Traversing

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/
/*
html
    <div id="my-div">
      <span class="one">One</span>
      <!-- comment -->
      <span class="two">Two</span>
      <!-- comment -->
      <span class="three">Three</span>
    </div>
*/
// let span = document.querySelector(".two");

// console.log(span.parentElement);

// span.onclick = function () {
//   span.parentElement.remove();
// }

//99//DOM Cloning

/*
  DOM [Cloning]//النسخ
  - cloneNode(Deep)
*/
/*
html
  <p id="my-p" class="my-p">this is<span>p</span></p>
  <div>div</div>
*/
// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-clone`;

// myDiv.appendChild(myP);

//100//addEventListener

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

// let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   document.body.appendChild(newP);
// };

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

// document.addEventListener("click", function (e) {
//   if (e.target.className === "clone") {
//     console.log("Iam Cloned");
//   }
// });

//تكليفات JavaScript Bootcamp من الدرس 094 إلى 101
//1
// window.onload = function(){
//   for(i = 0; i < document.links.length; i++){
//     let link = document.links[i];
//     if (link.classList.contains("open") && link.textContent === "Elzero")
//       link.click();
//   }
// }

//2
//trim == بتشيل المسافه

// let add = document.querySelector(".classes-to-add");
// let remove = document.querySelector(".classes-to-remove");
// let current = document.querySelector("[title = 'Current']");
// let cls = document.querySelector(".classes-list div");

// function addOrRemove(){
//     // remove all elements at the start
//     document.querySelectorAll("span").forEach(el => el.remove());

//     // add and remove classes
//     for (let i = 0; i < this.value.trim().split(" ").length; i++){
//         if (add.value)
//             current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);

//         if (remove.value)

//             current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
//     }
//     this.value = "";

//     // add and remove spans
//     if(current.classList.length){
//         [...current.classList].sort().forEach(el => {
//             let clSpan = document.createElement("span");
//             clSpan.textContent = el;
//             cls.append(clSpan);
//         });
//     }else cls.textContent = "No Classes To Show";
// }

// add.onblur = addOrRemove;
// remove.onblur = addOrRemove;

//3

// let target = document.querySelector("div.our-element");

// let start = document.createElement("div");
// start.className = "start";
// start.title = "Start Element";
// start.dataset.value= start.innerHTML = "Start";

// let end = document.createElement("div");
// end.className = "end";
// end.title = "End Element";
// end.dataset.value= end.innerHTML = "End";

// document.querySelector("p").remove();

// target.before(start);
// target.after(end);

//4
// let myDiv = document.getElementsByTagName("div")[0];

// console.log(myDiv.lastChild.nodeValue.trim());

//

// document.addEventListener("click",function(e){
//   console.log(`This is <${e.target.nodeName.toLowerCase()}>`);
// });

//102//What Is BOM ?

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

// window.document.title = "Hello JS";

//103//Alert, Confirm, Prompt

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

// let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

// console.log(promptMsg);

//104//setTimeout and clearTimeout

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function(){
//   console.log("msg")
// },3000)

// setTimeout(sayMsg,3000)

// function sayMsg(){
//   console.log(`i am abdallah`);
// }

// setTimeout(sayMsg,3000, "abdallah", 22)

// function sayMsg(user, age){
//   console.log(`i am message for ${user} his age is : ${age}`);
// }

// let coutter = setTimeout(sayMsg, 3000)
// function sayMsg(){
//   console.log(`i am message`);
// }

// let btn = document.querySelector("button");

// btn.onclick = function() {
//   clearTimeout(coutter);
// };

//105//setInterval and clearInterval

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

// let div = document.querySelector("div");

// function countdown(){
//   div.innerHTML -= 1;
//   if(  div.innerHTML === "0"){
//     clearInterval(counter)
//   }
// }
// let counter = setInterval(countdown,1000);

//106//Window Location Object

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

// console.log(location);
// console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

//107//Window Open And Close

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

// setTimeout(function () {
//   window.open("", "_self", "", false);
// }, 2000);

// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
// }, 1000);

//108//Window History Object

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

// console.log(history);

//109//Scroll, ScrollTo, ScrollBy, Focus, Print, Stop

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

//110//

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// let btn = document.querySelector("button");

// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };

// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// };

//111//Local Storage

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
// window.localStorage.setItem("color", "#F00");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// // Get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// // Remove One
// // window.localStorage.removeItem("color");

// // Remove All
// // window.localStorage.clear();

// // Get Key
// console.log(window.localStorage.key(0));

// // Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

//112// Local Storage Color App Practice

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

//113//Session Storage And Use Cases

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//   console.log(this.value);
//   window.localStorage.setItem("input-name", this.value);
// };

//115//Destructuring Arrays Part 1

/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["ahmed", "sayed", "ali", "maysa"];

// [a, b, c, d, e = "abdo"] = myFriends

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let [x, y, ,z] = myFriends;//لو حابب افوت عنصر بعمل كدا

// console.log(x);
// console.log(y);
// console.log(z);

//116//Destructuring Arrays Part 2

/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// let [ , , , [a , , [ , b]]] = myFriends;

// console.log(a);
// console.log(b);

//117//Destructuring Arrays Part 3 Swap Variables

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

// let book = "video";
// let video = "book";

// let stash = book;

// book = video;

// video = stash;

// [book, video] = [video, book];

// console.log(book);
// console.log(video);

//118//Destructuring Objects Part 1

/*
  Destructuring
  - Destructuring Object
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
// const { theName, theAge, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);

//119//Destructuring Objects Part 2

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "Red",
//   skills: { html: h, css },
// } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);

//120//Destructuring Function Parameters

/*
  Destructuring
  - Destructuring Function Parameters
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }

//121//Destructuring Mixed Content
// إنضم لكورسات الأكاديمية وإستفيد من الخصم الخاص في البداية

// /*
//   Destructuring
//   - Destructuring Mixed Content
// */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   skills: [, , three],
//   addresses: { egypt: e },
// } = user;

// console.log(`Your Name Is: ${n}`);
// console.log(`Your Age Is: ${a}`);
// console.log(`Your Last Skill Is: ${three}`);
// console.log(`Your Live In: ${e}`);

// تكليفات JavaScript Bootcamp من الدرس 115 إلى 122
// [ 6 ] تكليفات خاصة ب [ Destructuring ]

//1

// let myNumbers = [1, 2, 3, 4, 5];

// let [a, , , , e] = myNumbers;

// console.log(a * e); // 5

//2

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here
// [a, b, c, [d, e, [f ,g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// // Write Your Destructuring Assignment Here
// let [[c, ,], [ , ,], [, a, b]] = [arr1, arr2 ,arr3];

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed

// //4

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// const {age: a ,working: w ,country: c,hobbies:[h1 , ,h3] } = member
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming

//5

// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// let releasesKeys = Object.keys(game.releases);
// let { game: {
//         title : t,
//         developer : d,
//         releases : {
//           ["Oath In Felghana"] : [u,j],
//           ["Ark Of Napishtim"] : {US:u_price,JAP:j_price},
//           Origin:or
//         }
//       },releasesKeys:[o,a] } = {game , releasesKeys};

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD

//6//تحدي

// let chosen = 2;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// let title,age,available,s;

// switch(chosen){
//   case 1:
//     [{title,age,available,skills:[,s]}] = myFriends;
//     break;
//   case 2:
//     [,{title,age,available,skills:[,s]}] = myFriends;
//     break;
//   case 3:
//     [,,{title,age,available,skills:[,s]}] = myFriends;
//     break;
// }

// console.log(`${title}\n${age}\n${available?"Available":"Not Available"}\n${s}`)

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// // If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"

//123//Set Data Type And Methods

/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

// let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();
// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");

// console.log(`is set has ${myUniqueData.has("a".toUpperCase())}`);

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]);//undefined

// myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);

//124//Set vs WeakSet And Garbage Collector

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet);

// Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
// let iterator = mySet.keys();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// forEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// Type Of Data

// let myws = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myws);

//125//Map Data Type vs Object

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// let myObiect = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObiect);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObiect = {
//   10: "number",
//   "10": "string",
// };

// console.log(myNewObiect[10]);

// let myNewMap = new Map();
// myNewMap.set(10, "number");
// myNewMap.set("10", "number");
// myNewMap.set(true, "Boolean");
// myNewMap.set({a: 1, b: 2}, "Object");
// myNewMap.set([1, 2, 5], "arry");

// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));


// console.log("#".repeat(20));
// console.log(myNewObiect);
// console.log(myNewMap);


//126//Map Methods

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

// let myMap = new Map([
//   [10, "number"],
//   ["name", "string"],
//   [false, "boolean"],
// ]);
// myMap.set(10, "number");
// myMap.set("name", "string");
// myMap.set(false, "boolean");

// console.log(myMap.get(10));
// console.log(myMap.get("name"));
// console.log(myMap.get(false));

// console.log("#".repeat(10));

// console.log(myMap.has(false));

// console.log("#".repeat(10));

// console.log(myMap);
// console.log(myMap.size);

// console.log(myMap.delete("name"));
// console.log(myMap.size);

// myMap.clear();

// console.log(myMap.size);


//127//Map vs WeakMap

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/


// let mapUser = { theName: "Elzero" };

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// mapUser = null; // Override The Reference

// console.log(myMap);

// console.log("#".repeat(20));

// let wMapUser = { theName: "Elzero" };

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// wMapUser = null; // Override The Reference

// console.log(myWeakMap);




//128//Array.from Method
/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

// console.log(Array.from("abdallah"));

// console.log(Array.from("12345", function(n){
//   return +n + +n; 
// }));

// console.log(Array.from("12345", (n) => +n + +n));


// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(mySet);
// console.log(Array.from(mySet));

// console.log([...new Set(myArray)]);//futter

// function af(){
//   return Array.from(arguments);
// }

// console.log(af("abdo", "ahmed", "ali", 1, 2, 3));


//129//Array.copyWithin Method

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

// let myArray = [10, 20, 30, 40, 50, "A", "B"];


// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

// myArray.copyWithin(1, 5, 6); // [10, "A", 30, 40, 50, "A", "B"]
// myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]


// console.log(myArray)


//130//Array.some Method

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myNumber = 10;

// // let check = nums.some(function (e) {
// //   console.log("Test");
// //   return e > 5;
// // });

// let check = nums.some(function (e) {

//   return e > this;
// }, myNumber);

// // let check = nums.some((e) => e > 5);

// console.log(check);

// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkValues(nums, 20));
// console.log(checkValues(nums, 5));

// let range = {
//   min: 10,
//   max: 20,
// };
// let checkNumberInRange = nums.some(function (e) {
//   // console.log(this.min);
//   // console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range)

// console.log(checkNumberInRange)




//131//Array.every Method

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/


// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   50: "Place 3",
//   40: "Place 4",
// };
// let mainLocation = 15;

// let locationsArray = Object.keys(locations);

// console.log(locationsArray);

// let locationsArrayNumber = locationsArray.map((n) => +n);

// console.log(locationsArrayNumber);

// let check = locationsArrayNumber.every(function (e) {
//   return e > this;
// },mainLocation);

// console.log(check);




//132//Spread Syntax And Use Cases

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String


console.log("Abdallah");
console.log(..."Abdallah");
console.log([..."Abdallah"]);

// Concatenate Arrays




// Copy Array




// Push Inside Array





// Use With Math Object







// Spread With Objects => Merge Objects






















// تكليفات JavaScript Bootcamp من الدرس 123 إلى 133
//1
// let setOfNumbers = new Set([10]);
// setOfNumbers.add([20]).add(setOfNumbers.size);
// console.log(setOfNumbers);


//2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log([...new Set(myFriends.sort())]);


//3
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

//entries//تحويل 
// let myMap = new Map(Object.entries(myInfo));

// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has("role"));











//134//Intro And What Is Regular Expression

/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/  





//135//Regular Expression – Modifiers

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/  






//136//Regular Expression – Ranges Part 1


/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/  





//137//Regular Expression – Ranges Part 2



/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/  





//138//Regular Expression – Character Classes Part 1


/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/












//139//Regular Expression – Character Classes Part 2



/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/








//140//Regular Expression – Quantifiers Part 1


/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/











//141//Regular Expression – Quantifiers Part 2




/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/






//142//Regular Expression – Quantifiers Part 3



/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/










//143//Regular Expression – Replace With Pattern


/*
  Regular Expression

  - replace
  - replaceAll
*/







//144//Regular Expression – Form Validation


/*
  Regular Expression
  - Input Form Validation Practice
*/


