// Imports go first
import { firePottery } from "./Kiln.js"
import { potteryList } from "./PotteryList.js"
import { makePottery } from "./PotteryWheel.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 2, 4)
let pipe = makePottery("Pipe", 5, 8)
let kettle = makePottery("Kettle", 6, 5)
let ocarina = makePottery("Ocarina", 3, 2)
let spittoon = makePottery("Spittoon", 15, 10)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2100)
let firedPipe = firePottery(pipe, 2300) 
let firedKettle = firePottery(kettle, 2050)
let firedOcarina = firePottery(ocarina, 2000)
let firedSpittoon = firePottery(spittoon, 1914)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPipe)
toSellOrNotToSell(firedKettle)
toSellOrNotToSell(firedOcarina)
toSellOrNotToSell(firedSpittoon)

// Invoke the component function that renders the HTML list
const potteryListHTML = potteryList()

const potsToDOM = document.querySelector(".potteryList")
potsToDOM.innerHTML = potteryListHTML

console.log(potsToDOM)