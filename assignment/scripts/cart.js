console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// create a variable named basker and set to an empty array.
let basket = [];

//Create a function called `addItem`. It should:
//take an input parameter for a string`item`.
// add the new item to the global `basket` array.
// return
function addItem(item) {
    basket.push(item);
    return basket;
    } 

//Create a function called `listItems`. It should:
//loop over the items in the global `basket` array.
// cons
function listItems() {
    for (let item of basket) {
        console.log(item);
    }
}

//reate a function called `empty`. It should:
//reset the `basket` to an empty array.
// do not use`basket = []` to reset the array.

function empty() {
    basket.length = 0;
}

//Stretch Goals
//Remember that Stretch Goals are not required, 
//but will help you to further develop concepts
// from the skills we have covered.

//Using functions in other functions

//create a function called 'isFull'. It should:
//return 'false' if the basket contains less than five items
//return 'true' if the basket contains five items or more

function isFull() {
    if (basket.length < 5) {
        return false;
    }else {
        return true;
    }
    }

/*Update the required `addItem` function to:

   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
   - If an item was added to the array, return `true`
   - If








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
