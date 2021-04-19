// let a = prompt('1-sonni kiriting');
// let b = prompt('2-sonni kiriting');

// if(a > b && !isNaN(a) && !isNaN(b)) {
//     alert(a + 'katta' + b + 'dan')
// }else if(a == b && !isNaN(a) && !isNaN(b)){
//     alert(a + 'teng' + b + 'ga')
// }else if(a < b && !isNaN(a) && !isNaN(b)){
//     alert(a + 'kichik' + b + 'dan')
// }else {
//     if(isNaN(b) && isNaN(a)){
//         alert('ikkala qiymatga ham harf kiritildi')
//     } else if(isNaN(a)){
//         alert('faqat 1-qiymatga harf kiritildi')
//     } else if(isNaN(b)){
//         alert('faqat 2-qiymatga harf kiritildi')
//     }
// }

// if(d === '2007'){
//     alert('Salom "ADMIN" xush kelibsiz')
// }
// if(c === '2008'){
//     alert('Salom "ISHCHI" xush kelibsiz')
// }
// if(d === '2008'){
//     alert('Salom "ISHCHI" xush kelibsiz')
// }

// let c = prompt('login yoki gmailni kiriting')
// let d = prompt('parolni kiriting')

// if(c === 'sirojiddinov906@gmail.com' || c === '' && d === '0666' ){
//     alert('Salom "programist" xush kelibsiz')
// }
// else if((c === 'mahmudjon' || c === 'dasturchi') && d === '0103'){
//     alert('Salom "dasturchi" xush kelibsiz')
// }else{
//     alert('Siz jinoyatchisiz')
// }
// let a = +prompt('1-son ?');
// let b = +prompt('2-son ?');
// let c = +prompt('3-son ?');
// let d = +prompt('4-son ?');

// let nam = a + b + c + d;

// alert('o\'rta arifmetigi mana:' +nam / 4)



// let a = 18 +prompt ('yoshingiz necha')
// let a = 30 +prompt ('yoshingiz necha')
// let a = 45 +prompt ('yoshingiz necha')
// let a = 60 +prompt ('yoshingiz necha')
// let a = 100 +prompt ('yoshingiz necha')
// alert(a > "yoshingiz yetmaydi")
// for(let i= 0; i<101; i++){
//     if(i % 2 == 1){
//       console.log(i)         
//     }
// }
// let ansver =1;

// for(let i=1; i<15; i++){
//     ansver = ansver * i;
//     ansver *=i
// }
// console.log(ansver);

// Base function
// function Drinks(data) {
//     var that = {}; // Create an empty object
//     that.name = data.name; // Add it a "name" property
//     return that; // Return the object
//   };
  
//   // Fuction which inherits from the base function
//   function Coffee(data) {
//     // Create the Drinks object
//     var that = Drinks(data);
//     // Extend base object
//     that.giveName = function() {
//       return 'This is ' + that.name;
//     };
//     return that;
//   };
  
//   Usage
//   var firstCoffee = Coffee({ name: 'Cappuccino' });
//   console.log(firstCoffee.giveName());
//   // Output: "This is Cappuccino"
//   let dogs = [
//     { name: ‘Rio’, age: 2 },
//     { name: ‘Mac’, age: 3 },
//     { name: ‘Bruno’, age: 5 },
//     { name: ‘Jucas’, age: 10 },
//     { name: ‘Furr’, age: 8 },
//     { name: ‘Blu’, age: 7 },



// let dogsNames = Array.from(dogs, ({name}) => name);
// alert( returns ) 
// let num = 4
// let newNum = num.toString();

// let num = "4"
// let stringNumber = Number(num);
// let num = 15;
// let numString = num + "";   
// let stringNum = +s;   
// let a= prompt('1-sonnni tanlang')
// let b= prompt('1-sonnni tanlang')
// let d= prompt('1-sonnni tanlang')

//  if ((a < a && a < c) || (c < a && a < b)){
//     alert('o'/'rta qiymat'+a)
//  }
//  else if((a < a && a < c) || (c < a && a < b)){ 
 
//     alert('o'/'rta qiymat'+b)
//   }
//  else if ((a < a && a < c) || (c < a && a < b)){ 
 
//   alert('o'/'rta qiymat'+c)
// }
 





 
 

  // let a = prompt('vaqtni kiriing')

  // if ((6 < a) || (9 = a) ) {
  //   alert('hayirli tong')
  // }
  // else if ((9 < a) || (14= a) ) {
  //   alert('hayirli kun')
  // }
  // else if ( 14 < a)  {
  //   alert('hayirli kech')
  // }
  
  




  // let a =+prompt('1 qiymatni kiriting');
  // let b =+prompt('2 qiymatni kiriting');

  // for (i=a; i < b; i++){
  //   if (i % 2 == 1){
  //     document.write(i + '<br>');
  //   }
  // }
  // for(i=0 ; i<10; i++){
  //   for
  // }

//   text += cars[0] + "<br>";
// text += cars[1] + "<br>";
// text += cars[2] + "<br>";
// text += cars[3] + "<br>";
// text += cars[4] + "<br>";
// text += cars[5] + "<br>";

// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }
















// let miqdor, birSIM, oxirgiSIM;

// miqdor = prompt('zina sonini kiriting');
// while(isNaN(miqdor) || miqdor<= 0){
//   miqdor = prompt('boshqatan kiriting')
// }
// birSIM = prompt('birinchi simbilni kiriting');
// while(!isNaN(birSIM)){
//   birSIM = prompt('boshqatan kiriting')
// }
// oxirgiSIM = prompt('oxirgi zimni kiriting');
// while(!isNaN(oxirgiSIM)){
//  oxirgiSIM = prompt('boshqatan kiriting')
// }

// for(i=1; i < miqdor; i++){
//   if (i == 1) {
//     oxirgiSIM = oxirgiSIM
    
//   }else{
//     oxirgiSIM = birSIM + oxirgiSIM;

//   }
//  console.log(oxirgiSIM);;
// }










 
// let doska = '';
// let a = +prompt('dioganal sonni kiriting')

// for(i=0; i<a; i++){
//   for(j=0; j<a; j++){
//     if(i == 0 || j == 0 || j == i || j == a - 1 || i == a -1){
//       doska += ' ○ '
//     } else{
//       doska += ' • '
//     }
//   }
//   console.log(doska);
//   doska = ''
// }









// let doska = '';

// for(i=0; i<8; i++){
//   for(j=0; j<8; j++){
//     if(i % 2 != j % 2){
//       doska += '[○]'
//     } else{
//       doska += '[•]'
//     }
//   }
//   console.log(doska);
//   doska = ''
// }






// function funk(){
//   alert('birinchi funksiya')    
// }
// funk();
// let a = +prompt('1-son')
// let c = +prompt('2-son')

// let b = a + c;
// alert('javobingiz: ' + b)




// console.log(Math.floor(Math.random() * 131));




// document.write(Math.floor(5.6));
// document.write(Math.ceil(5.1));
// document.write(Math.round(5.5));
// document.write(Math.pow(2, 11));
// document.write(Math.sqrt(256));




// 1-ish!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

