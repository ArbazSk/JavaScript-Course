// Window Method, Object, Properties

//Alert
// alert('Hello World');

//Promt
// const inp = prompt();
// alert(inp);

//Confirm
// if(confirm('Are You Sure')){
//     console.log('YES');
// }else{
//     console.log("NO");
// }

// Properties
// Outer  Height and Width
let val;
val = window.outerHeight;
console.log(val);

val = window.outerWidth;
console.log(val);

// Inner Height and Width
let val1;
val1 = window.innerHeight;
console.log(val1);

val1 = window.innerWidth;
console.log(val1);

// Scroll Point
let val2;
val2 = window.scrollY;
val2 = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.host;
val = window.location.port;
val = window.location.hostname;
val = window.location.href;
val = window.location.search; 
//IN:- http://127.0.0.1:5500/index.html?id=1&name=Shaikh
// OP:- ?id=1&name=Shaikh

//Redirect
// window.location.href = 'http://google.com';
//Relod
// window.location.reload();

// History Object

// window.history.go(-1);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; 
// win32 = windows , darwin = macos
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);