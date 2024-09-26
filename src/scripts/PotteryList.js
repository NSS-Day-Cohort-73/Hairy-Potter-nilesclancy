// 1. Create a `scripts/PotteryList.js` module.
// 1. Define and export a `PotteryList` function.
// 1. The `PotteryList` function must get the items to be sold from the `PotteryCatalog.js` module.
// 1. The `PotteryList` function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
//    ```html
//    <section class="pottery" id="pottery--1">
//      <h2 class="pottery__shape">Mug</h2>
//      <div class="pottery__properties">
//        Item weighs 3 grams and is 6 cm in height
//      </div>
//      <div class="pottery__price">Price is $20</div>
//    </section>
//    ```
// 1. The `PotteryList` function must then return a single string that contains ALL of the pottery HTML representation.

// #### Checking Your Work

// In the `main.js` module, invoke the `PotteryList` component function. Take its return value and update the inner HTML of the article element you created above. When you start your web server, you should see your non-cracked pottery list appear (_example below_).

// ![example output](./src/images/pottery.png)

import { usePottery } from "./PotteryCatalog.js"

export const potteryList = () => {
    let potBag = usePottery()
    let potsHTML = ""

    potBag.forEach(pot => {
        potsHTML += `
        <section class="pottery" id="pottery--${pot.id}">
            <h2 class="pottery__shape">${pot.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pot.weight} grams and is ${pot.height} cm in height
            </div>
            <div class="pottery__price">The price is $${pot.price}</div>
        </section>
        `
    });

    potsHTML += ""

    return potsHTML

}