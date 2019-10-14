"use strict";

var stores = [];
var openHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm"
];

function Store(nameOfStore, minCusPerhr, maxCusPerhr, avgCookiesSoldPerCust) {
  this.nameOfStore = nameOfStore;
  this.minCusPerhr = minCusPerhr;
  this.maxCusPerhr = maxCusPerhr;
  this.avgCookiesSoldPerCust = avgCookiesSoldPerCust;
  this.cookiesPerHour = [];
  this.custPerHour = [];
  this.dailyTotal = 0;
  stores.push(this);

  this.addCustPerHour(this.minCusPerhr, this.maxCusPerhr);
  this.generateHourlySales();
  this.render();
  createTableFooter();
}



Store.prototype.addCustPerHour = function(min, max) {
  for (var i = 0; i < openHours.length; i++) {
    var randomCustPerHour = Math.round(Math.random() * (max - min + 1) + min);
    this.custPerHour.push(randomCustPerHour);
    console.log("customers per hour", randomCustPerHour);
  }
};


/********************************************************************************* */



Store.prototype.generateHourlySales = function() {
  // Line below will populate custPerHour array
  this.addCustPerHour(this.min, this.max);

  for (var i = 0; i < openHours.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookiesSoldPerCust);
    this.cookiesPerHour.push(perHour);

    // this.dailyTotal = this.dailyTotal + perHour;
    this.dailyTotal += perHour;
  }
};





Store.prototype.render = function() {
  this.generateHourlySales();

  var tbodyEl = document.getElementById("tbl-body");
  var trEl = document.createElement("tr");

  // tbodyEl.id = this.nameOfStore.toLowerCase().split("").join(_);

  var thEl = document.createElement("th");
  thEl.textContent = this.nameOfStore;
  trEl.appendChild(thEl);




  for (var i = 0; i < openHours.length; i++) {
    var tdEl = document.createElement("td");
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var totalEl = document.createElement("td");
  totalEl.textContent = this.dailyTotal;
  trEl.appendChild(totalEl);

  tbodyEl.appendChild(trEl);
};




function createTable() {
  var mainEl = document.getElementById(newFunction());
  var tblEl = document.createElement("table");
  tblEl.id = "sales-table";
  mainEl.appendChild(tblEl);
}

function newFunction() {
  return "main-content";
}




function createTableHeader() {
  var tblEl = document.getElementById("sales-table");
  var theadEl = document.createElement("thead");
  var trEl = document.createElement("tr");
  var emptyTh = document.createElement("th");

  trEl.appendChild(emptyTh);

  for (var i = 0; i < openHours.length; i++) {
    var thEl = document.createElement("th");
    thEl.textContent = openHours[i];
    trEl.appendChild(thEl);
  }

  var totalEl = document.createElement("th");
  totalEl.textContent = "Daily Total";
  trEl.appendChild(totalEl);

  theadEl.appendChild(trEl);
  tblEl.appendChild(theadEl);
}

function createTableBody() {
  var tblEl = document.getElementById("sales-table");
  var tbodyEl = document.createElement("tbody");
  tbodyEl.id = "tbl-body";
  tblEl.appendChild(tbodyEl);
}

function createTableFooter() {
  var tfootElCheck = document.getElementById("tbl-foot");

  if (tfootElCheck) {
    tfootElCheck.remove();
  }

  var tblEl = document.getElementById("sales-table");
  var tfootEl = document.createElement("tfoot");
  var trEl = document.createElement("tr");

  tfootEl.id = "tbl-foot";

  var total2 = document.createElement("th");
  total2.textContent = "Total";
  trEl.appendChild(total2);

  var grandTotal = 0;
  for (var i = 0; i < openHours.length; i++) {
    var tdEl = document.createElement("td");
    var totals = 0;
    for (var j = 0; j < stores.length; j++) {
      totals += stores[j].cookiesPerHour[i];
    }

    tdEl.textContent = totals;
    trEl.appendChild(tdEl);

    grandTotal += totals;
  }

  var grandTotalEl = document.createElement("td");
  grandTotalEl.textContent = grandTotal;
  trEl.appendChild(grandTotalEl);

  tfootEl.appendChild(trEl);
  tblEl.appendChild(tfootEl);
}

(function run() {
  createTable();
  createTableHeader();
  createTableBody();
})();




new Store("Seattle", 23, 65, 6.3);
new Store("Tokyo", 3, 24, 1.2);
new Store("Dubai", 11, 38, 3.7);
new Store("Paris", 20, 38, 2.3);
new Store("lima", 2, 16, 4.6);
