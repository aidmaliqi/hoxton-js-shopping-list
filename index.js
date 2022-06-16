//- Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
//- Store this information using the most appropriated data structures we've studied so far
//- Have a prompt to add an item to the list (you can have two prompts for the item and its price)
//- Output a list displaying each item and its price
//- Output the total at the end

let products = ["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes" , "Ready-Meals"]
let prices =   [1.20 , 2.00 , 2.00,   2.00,    2.50 ,        5.00]

let newItem = confirm("Do you want to add new item?");
if ( newItem == true) {
    let newProduct = prompt("Add a new product to the list")
    products.push(newProduct)
    let newPrice = Number(prompt('What is your products price?'))
    prices.push(newPrice)
} else {
    alert("You did not add any items")
}

products.forEach((product, i) => {
    let price = prices[i];
    console.log(product, price,"$");
  })
let total= 0
for(let price of prices){
   total += price
}
console.log("The total price is:" ,  total,"$")

//Challenge
//We should be able to expand the list.
//As such, find a way to have two prompts, one for the item and another for the price,
//asking you repeatedly to add items to your list.
//The user should be able to stop adding items and then output the list to the user.
//We can use Google in our favour here if we know the right questions to ask