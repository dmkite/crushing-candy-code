var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
  return store1['2015-01-08'][0][1]
}

// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
  return store1['2015-01-06'][1][2]
}

// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on
// Jan 8. After simply outputting the data, try creating an
// array that contains the candy names.
function loopingData1() {
  let result = [];
  for (let i = 0; i < store1['2015-01-08'].length; i++){
    result.push(store1['2015-01-08'][i][0])
  }
  return result;
}

// Create a loop to count the total number of candies sold on
// Jan 10 at store1. Where do you have to initialize
// the counter variable? Why?
function loopingData2() {
  let counter = 0;
  for (let i = 0; i < store1['2015-01-10'].length; i++){
    counter += store1['2015-01-10'][i][2]
  }
  return counter;
}

// Use `Object.keys()` to get an array of the dates that candies
 // were sold at store1.
function loopingData3() {
  let keys = Object.keys(store1)
  return keys
}

// Use a loop to calculate the total number of candies sold
 // at store1.
function loopingData4() {
  let counter = 0;
  for (let keys in store1){
    let saleDate = store1[keys]
    for (let i = 0; i < saleDate.length; i++){
      counter += saleDate[i][2]
    }
  }
  return counter;
}

// In the previous exercise, where did you have to initialize
 // the counter variable? Why?
function loopingData5() {
  return 'Outside the for loops otherwise, the counter is reset to 0 every loop'
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1
// on January 10th.

// Be sure to return a number! Example `14.55`
function challenge1() {
  let revenue = 0
  for (let i = 0; i < store1['2015-01-10'].length; i++){
    revenue += store1['2015-01-10'][i][2] * store1['2015-01-10'][i][1]
  }
  return revenue.toFixed(2)
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
