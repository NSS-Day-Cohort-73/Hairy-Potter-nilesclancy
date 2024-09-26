// 1. Create a `scripts/PotteryWheel.js` module.
// 1. Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
// 1. Define and export a function named `makePottery`.
// 1. The `makePottery` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
//    1. Shape of the piece of pottery (e.g. "Mug", "Platter")
//    1. Weight of the piece (e.g. 1, 5)
//    1. Height of the piece (e.g. 3, 7)
// 1. The `makePottery` function must return an object with the following properties on it.
//    1. `shape`
//    1. `weight`
//    1. `height`
//    1. `id` _(increment this value each time the function is invoked)_

// #### Checking Your Work

// In the `main.js` module, invoke the `makePottery` function and provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the object.

// Once you have it working, make 5 pieces of pottery in `main.js`.

let potsId = 1

export const makePottery = (shape, weight, height) => {
    const pots = {
        shape: shape,
        weight: weight,
        height: height,
        id: potsId++,
    }

    return pots
}