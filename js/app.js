// A diner object with:
// Name
// list of dishes (what they ate, and how much it cost)
// A method to add the total of the dishes
// A method to calculate tax for this diner
// A method to calculate the tip for this diner
// A bill object with:
// list of diners
// method to total and print the total of all diners, including tax
// method to total and print diners tips
// method to print a breakdown for each diner including their name, total, tax and tip
// Dummy data that creates:
// 1 bill
// 3 diners that are on the same bill
// 2 dishes for each diner
// Print the total for the bill
// Print the total tip for the waitress
// Print a breakdown for each person


var Diner = function(dinerName,customer1,customer2,customer3) {
    this.dinerName = dinerName;
	var customers = [];
	customers.push(customer1);
	customers.push(customer2);
	customers.push(customer3);
};

var customer = function(name

// var customer = function(customerName){
	// this.customerName = customerName;
// }

var tip = function(cost){
	this.cost = cost;
	this.cost = this.cost * .15;
	
	return this.cost;
}

var tax = function(cost){
	this.cost = cost;
	this.cost = this.cost * .095;
	
	return this.cost;
}

var total = function(cost,tax,tip){
	return (cost + tax + tip);
}

$(document).ready(function(){

});