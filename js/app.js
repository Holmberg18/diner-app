// A diner object with:
// Name
// list of dishes (what they ate, and how much it cost)
// A method to add the total of the dishes
// A method to calculate tax for this diner //
// A method to calculate the tip for this diner //


// A bill object with:
// list of diners
// method to total and print the total of all diners, including tax//
// method to total and print diners tips
// method to print a breakdown for each diner including their name, total, tax and tip
// Dummy data that creates:
// 1 bill
// 3 diners that are on the same bill
// 2 dishes for each diner
// Print the total for the bill
// Print the total tip for the waitress
// Print a breakdown for each person


var Bill = function(){

	
};

var Diner = function(name, dish1, dish2) {
		
		console.log(dish1.cost + dish2.cost);
				
		this.total = function(dish1, dish2){
			return dish1.cost + dish2.cost;
		};
	
		var tip = function(cost){ //TIP
			this.cost = cost;
			this.cost = this.cost * (0.15);
	
			return this.cost;
		};
		
		var tax = function(cost){ //TAX
			this.cost = cost;
			this.cost = this.cost * (0.095);
	
			return this.cost;
		};
		
		var dinerTip = tip(dish1.cost);
		dinerTip += tip(dish2.cost);
		
		var dinerTax = tax(dish1.cost);
		dinerTax += tax(dish2.cost);
		
		var total = this.total;
		console.log(total);
		var Customer = { dinerName:name, totalCost: (total() + dinerTip + dinerTax) };		
		console.log(Customer.totalCost);
		return Customer;
	
};



$(document).ready(function(){

	var Dish1 = { name:"Fried Noodles", cost: 12.49 };
	var Dish2 = { name:"Won Ton Soup", cost: 3.49 };
	var Jeremy = new Diner("Jeremy", Dish1, Dish2);
	
	console.log(Jeremy);
	console.log(Jeremy.Customer.totalCost);
	
});