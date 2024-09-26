// 1. Define a `scripts/Kiln.js` module.
// 1. Define and export a function named `firePottery` that is responsible for acting as a kiln.
// 1. The function must accept the following values as input _(i.e. it needs parameters)_, in the following order. If you don't remember, you can easily [add new properties to objects in JavaScript](https://www.dyn-web.com/tutorials/object-literal/properties.php).
//    1. An object representing a piece of pottery that was made at the wheel in the `makePottery` function.
//    1. A number specifying the firing temperature of the kiln.
// 1. The function must add a new property of `fired` with the value of `true` to the object.
// 1. The function must add a new property of `cracked` to the object.
//    1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
//    1. If the temperature of the kiln is at, or below, 2200 degrees then `cracked` property must have a value of `false`.
// 1. After both of the new properties have been added, return the augmented object.

// #### Checking Your Work

// In the `main.js` module, invoke the `firePottery` function for each of the 5 pieces of pottery you created. Ensure you provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the objects and make sure it has the right properties on each.

// To check your work, make sure that at least one of your pieces of pottery is fired at a temperature that is too high.

export const firePottery = (pots, temp) => {
    pots.fired = true

    if (temp > 2200) {
        pots.cracked = true
    } else {
        pots.cracked = false
    }

    return pots
}