// 1. Create a `scripts/PotteryCatalog.js` module.
// 1. Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
// 1. Define and export a function named `toSellOrNotToSell` that is responsible for determining if a piece of pottery should be sold.
// 1. The `toSellOrNotToSell` function must accept a pottery object as input.
// 1. If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a `price` property with a value of 40.
// 1. If the weight of the piece of pottery is less than 6 then the function must add a `price` property with a value of 20.
// 1. If the piece of pottery is cracked, do not add a `price` property to it.
// 1. If the pottery is **not** cracked, add the object to the module-level array of items to be sold.
// 1. Return the augmented object.
// 1. Define and export a function named `usePottery` returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.

// #### Checking Your Work

// In the `main.js` module, invoke the `toSellOrNotToSell` function for each of the 5 pieces of pottery you created. Ensure you provide the required value as an argument.

// **THEN PUSH YOUR CODE TO GITHUB**

// ### Display the Catalog

// Your next task is to create HTML representations of the pottery you want to sell at the craft fair and display them on the DOM. Then you will track which ones you sell.

// #### Define DOM Target

// 1. Create an `<article>` element in the `index.html` file.
// 1. The article element must have a class of `potteryList`.

let potSales = []

export const toSellOrNotToSell = (pots) => {
    if (!pots.cracked) {
        if (pots.weight >= 6) {
            pots.price = 40
        }
        else {
            pots.price = 20
        }

        potSales.push(pots)
    
    }

    if (pots.cracked) {
        pots.price = 2.50

        potSales.push(pots)
    }

    return pots
    
}

export const usePottery = () => {
    return potSales.map(pots => ({ ...pots}))
}