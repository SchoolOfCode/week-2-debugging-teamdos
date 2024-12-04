const shoppingCart = [
  {
    product: "Bananas",
    price: 0.5,
    quantity: 6,
  },
  {
    product: "Apples",
    price: 0.7,
    quantity: 8,
  },
  {
    product: "Yoghurt",
    price: 1.5,
    quantity: 10,
  },
];

let totalCost = 0;

for (let i = 0; i < shoppingCart.length; i++) { //index should run while less than shopping cart array length
  const item = shoppingCart[i];
  console.log(item)
  const costForItem = item.price * item.quantity; // problem
  totalCost += costForItem;
}

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});


console.log(`The total cost for this cart is ${formatter.format(totalCost)}`);


// 1. Check the syntax/structure of code (no typos)
// 2. Test the function and check output in devtools
// 3. Follow the code per line and articulate what is happening explicitly to understand how the function works
//     - eg. check data types, return statements, if statement logic
// 4. If we are making changes to the logic of the function, then test and log each assumption + changes

// ERROR MESSAGE IN CONSOLE: Uncaught TypeError: Cannot read properties of undefined (reading 'price') - line 23

// 1. FAIL: It can't access item.price because of the nesting of the array (structure) or the datatype. 
    // Test: console log the type of data for item to get more info
    // Outcome: we've been able to access item.price within the for loop, and datatypes seme to match (property quant & price are both numbers)
    // Test 2: console logged cost for item, returned the costs for each object of array correctly (as we expected)
    // outcome: datatypes are consistent (numbers for item.price property & .quantity)
    
// 2. FAIL: Issue might be how the total cost and cost for item variables are added?
    // Test: i can't remember but it worked

// 3. FAIL: what if we store item.price and item.quantity in seperate variables before multiplying them ? 
    // Reason: As the issue is that it can't read the price property from item
    // Test: seperate item.price and item.quantity in seperate variables before multiplying
    // outcome: didn't make a diff -- FAIL

// 4. SUCCESS: for loop logic? <= or just < ?
    // test: change forloop logic to i < shoppingCart.length so it iterates over the array less than the shopping items array length
    // outcome: worked
