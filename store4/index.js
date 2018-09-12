var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^

// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1() {
  return store4['Dark Chocolate Crunchies']['cost']
}

// Return the total number of 'Berry Bites' sold by store4
function accessesingData2() {
  return store4['Berry Bites']['sold on'].length
}

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1() {
  let array = []
  for (keys in store4){
      if( store4[keys]['cost'] > 2){
        array.push(keys)
      }
  }
  return array
}

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2() {
  let result = {}
  for(let keys in store4){
    result[keys] = store4[keys]['cost']
  }
  return result
}

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents
 // 1 item sold. Round revenue to two decimal points. Return your answer as an array: `[total1, total2]`
 function challenge1() {
   let result = []
   result.push((store4['Peppermint Poppers']['cost'] * store4['Peppermint Poppers']['sold on'].length).toFixed(2), (store4['Caramel Twists']['cost'] * store4['Caramel Twists']['sold on'].length).toFixed(2))
   return result
 }

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.

function challenge2() {
  let result = 0
  for(let keys in store4){
    let item = store4[keys]

    for(let i = 0; i < item['sold on'].length; i++){
      if (item['sold on'][i] === '2015-01-09'){
        result += item['cost']
      }
    }
  }
  return result.toFixed(2)
}

// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3() {
  return (store4['Dark Chocolate Crunchies']['cost'] * store4['Dark Chocolate Crunchies']['sold on'].length).toFixed(2)
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
