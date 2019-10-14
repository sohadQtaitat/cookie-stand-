var ArrCookie = [];

var sum=0;

var Seattle = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averagePerCustomer: 6.3,


  forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
    var range = maxCustomersPerHour - minCustomersPerHour;
    var rand = (Math.random() * range )+ minCustomersPerHour;
    var final = Math.ceil(rand);
    return (final);
  }
};



for( var i = 6; i < 12; i++) 
{
  var set=Seattle.forEachHour(23,65) * Seattle.averagePerCustomer;
  var cookiesPerHour = Math.ceil(set);
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

if (i == 12) {
  var cookiesPerHour = Math.ceil(Seattle.forEachHour(23,65)) * Seattle.averagePerCustomer;
  var Print =i +'pm:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}


for (var i = 1; i < 7; i++) {
 var cookiesPerHour = Math.ceil(Seattle.forEachHour(23,65)) * Seattle.averagePerCustomer;
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

var printTotal ='Total:'+ sum + ' cookies';
ArrCookie.push(printTotal);


////////////////////////////////////////////////////////////////////


var seattleContent = document.createElement('p');
seattleContent.textContent = "Seattie";
var area = document.getElementById('content-area');
area.appendChild(seattleContent);
var ul = document.createElement('ul');
area.appendChild(ul);




for (var i=0 ; i<=14 ;i++)
{
  var element = document.createElement('li');
  var li = document.createElement('li');
  element.textContent = ArrCookie[i];
  ul.appendChild(element);
   
}





/////////////******************************************************************************** */

var ArrCookie = [];

var sum=0;

var Tokyo = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averagePerCustomer: 1.2,
  forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
    var range = maxCustomersPerHour - minCustomersPerHour;
    var rand = (Math.random() * range )+ minCustomersPerHour;
    var final = Math.ceil(rand);
    return (final);
  }
};



for( var i = 6; i < 12; i++) 
{
  var set=Tokyo.forEachHour(3,24) * Tokyo.averagePerCustomer;
  var cookiesPerHour = Math.ceil(set);
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

if (i == 12) {
  var cookiesPerHour = Math.ceil(Tokyo.forEachHour(3,24)) * Tokyo.averagePerCustomer;
  var Print =i +'pm:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}


for (var i = 1; i < 7; i++) {
 var cookiesPerHour = Math.ceil(Tokyo.forEachHour(3,24)) * Tokyo.averagePerCustomer;
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

var printTotal ='Total:'+ sum + ' cookies';
ArrCookie.push(printTotal);


////////////////////////////////////////////////////////////////////


var TokyoContent = document.createElement('p');
TokyoContent.textContent = "Tokyo";
var area = document.getElementById('content-area');
area.appendChild(TokyoContent);
var ul = document.createElement('ul');
area.appendChild(ul);




for (var i=0 ; i<=14 ;i++)
{
  var element = document.createElement('li');
  var li = document.createElement('li');
  element.textContent = ArrCookie[i];
  ul.appendChild(element);
   
}



///**************************************************************** */




var ArrCookie = [];

var sum=0;

var Dubai = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averagePerCustomer: 3.7,
  forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
    var range = maxCustomersPerHour - minCustomersPerHour;
    var rand = (Math.random() * range )+ minCustomersPerHour;
    var final = Math.ceil(rand);
    return (final);
  }
};



for( var i = 6; i < 12; i++) 
{
  var set=Dubai.forEachHour(11,38) * Dubai.averagePerCustomer;
  var cookiesPerHour = Math.ceil(set);
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

if (i == 12) {
  var cookiesPerHour = Math.ceil(Dubai.forEachHour(11,38)) * Dubai.averagePerCustomer;
  var Print =i +'pm:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}


for (var i = 1; i < 7; i++) {
 var cookiesPerHour = Math.ceil(Dubai.forEachHour(11,38)) * Dubai.averagePerCustomer;
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

var printTotal ='Total:'+ sum + ' cookies';
ArrCookie.push(printTotal);


////////////////////////////////////////////////////////////////////


var DubaiContent = document.createElement('p');
DubaiContent.textContent = "Dubai";
var area = document.getElementById('content-area');
area.appendChild(DubaiContent);
var ul = document.createElement('ul');
area.appendChild(ul);




for (var i=0 ; i<=14 ;i++)
{
  var element = document.createElement('li');
  var li = document.createElement('li');
  element.textContent = ArrCookie[i];
  ul.appendChild(element);
   
}








////////////////****************************************************** */



var ArrCookie = [];

var sum=0;

var Paris = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  averagePerCustomer: 2.3,
  forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
    var range = maxCustomersPerHour - minCustomersPerHour;
    var rand = (Math.random() * range )+ minCustomersPerHour;
    var final = Math.ceil(rand);
    return (final);
  }
};



for( var i = 6; i < 12; i++) 
{
  var set=Paris.forEachHour(20,38) * Paris.averagePerCustomer;
  var cookiesPerHour = Math.ceil(set);
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

if (i == 12) {
  var cookiesPerHour = Math.ceil(Paris.forEachHour(20,38)) * Paris.averagePerCustomer;
  var Print =i +'pm:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}


for (var i = 1; i < 7; i++) {
 var cookiesPerHour = Math.ceil(Paris.forEachHour(20,38)) * Paris.averagePerCustomer;
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

var printTotal ='Total:'+ sum + ' cookies';
ArrCookie.push(printTotal);


////////////////////////////////////////////////////////////////////


var ParisContent = document.createElement('p');
ParisContent.textContent = "Paris";
var area = document.getElementById('content-area');
area.appendChild(ParisContent);
var ul = document.createElement('ul');
area.appendChild(ul);




for (var i=0 ; i<=14 ;i++)
{
  var element = document.createElement('li');
  var li = document.createElement('li');
  element.textContent = ArrCookie[i];
  ul.appendChild(element);
   
}











/////////////////////****************************************************** */




var ArrCookie = [];

var sum=0;

var Lima = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  averagePerCustomer: 4.6,
  forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
    var range = maxCustomersPerHour - minCustomersPerHour;
    var rand = (Math.random() * range )+ minCustomersPerHour;
    var final = Math.ceil(rand);
    return (final);
  }
};



for( var i = 6; i < 12; i++) 
{
  var set=Lima.forEachHour(2,16) * Lima.averagePerCustomer;
  var cookiesPerHour = Math.ceil(set);
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

if (i == 12) {
  var cookiesPerHour = Math.ceil(Lima.forEachHour(2,16)) * Lima.averagePerCustomer;
  var Print =i +'pm:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}


for (var i = 1; i < 7; i++) {
 var cookiesPerHour = Math.ceil(Lima.forEachHour(2,16)) * Lima.averagePerCustomer;
  var Print =i +'am:'+ cookiesPerHour + ' cookies';
  sum = sum + cookiesPerHour;
  ArrCookie.push(print);
}

var printTotal ='Total:'+ sum + ' cookies';
ArrCookie.push(printTotal);


////////////////////////////////////////////////////////////////////


var LimaContent = document.createElement('p');
LimaContent.textContent = "lima";
var area = document.getElementById('content-area');
area.appendChild(LimaContent);
var ul = document.createElement('ul');
area.appendChild(ul);




for (var i=0 ; i<=14 ;i++)
{
  var element = document.createElement('li');
  var li = document.createElement('li');
  element.textContent = ArrCookie[i];
  ul.appendChild(element);
   
}






















// var Seattle = {
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   averagePerCustomer: 6.3,


//   forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
//       var range = maxCustomersPerHour - minCustomersPerHour;
//       var rand = Math.random() * range + minCustomersPerHour;
//       var final = Math.ceil(rand);
//       return (final);
//   },
//   cookiesPurchased: function () {
//       var hours = [
//           "6am: ",
//           "7am: ",
//           "8am: ",
//           "9am: ",
//           "10am: ",
//           "11am: ",
//           "12pm: ",
//           " 1pm: ",
//           " 2pm: ",
//           "3pm: ",
//           "4pm: ",
//           " 5pm: ",
//           "6pm: ",
//           " 7pm: ",
//           "Total: "
//       ];
//       var sum = 0;
//       for (i = 0; i < 14; i++) {
//           var cookiesPerHour = this.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour) * Seattle.averagePerCustomer;
//           sum = sum + cookiesPerHour;
//           hours[i] = hours[i] + Math.ceil(cookiesPerHour);
//       }
//       hours[14]=hours[14]+ sum;
//       return hours;
//   }
// }
// Seattle.forEachHour(Seattle.minCustomersPerHour, Seattle.maxCustomersPerHour