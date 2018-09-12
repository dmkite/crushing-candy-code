var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2
 // to a variable, then return that variable
function accessesingData1() {
    let bbSaleDate = store2['sale dates']['Banana Bunches']
    return bbSaleDate
}

// Using a built-in array property return the total sale dates
 // there are for store2's 'Banana Bunches'
function accessesingData2() {
  return store2['sale dates']['Banana Bunches'].length
}

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in
// store2. Then reassign it to a new value. When you
// update your new variable, does the price in the store2 data
// change? Return your answer as a boolean and write a
// comment on why or why not.
function updatingData1() {
  let mwPrices = store2['inventory prices']['Mint Wafers']
  mwPrices = 5;
  return false
  //It does not change the value of store2, because you're not changing anything related to store2, only the variable
}

// Set a variable equal to the 'Caramel Twists' sale dates in
// store2. Use pop to remove one of the sale dates for
// store2's 'Caramel Twists'. Does your variables value
// match up with what is in store2? Return your answer as
// a boolean and write a comment on why or why not.
function updatingData2() {
  let ctSaleDates = store2['sale dates']['Caramel Twists']
  ctSaleDates.pop()
  return true
  //in the previous example the variable was written over, not affecting the object. In this example a method is applied to the content of the variable, so it changes the object
}

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use
 // this to create an object containing dates as the key and the
  // value as the quantity sold on that day.
// Example:
// {
//   '2014-11-19': 4,
//   '2014-11-20': 3,
// }
function loopingData1() {
  let result = {}
  for(let i = 0; i < store2['sale dates']['Caramel Twists'].length; i++){
    let prop = store2['sale dates']['Caramel Twists'][i]
    if(!result[prop]){
      result[prop] = 1
    }
    else{
      result[prop] += 1
    }
  }
  return result
}


// Iterate over store2's sale dates data to find which day had
// the most total number of sales. Return the date with the
// most sales.
function loopingData2() {
  let longest = 0
  let result = {}
  let final
  for (let keys in store2['sale dates']){
    let dates = store2['sale dates'][keys]
    for(let i = 0; i < dates.length; i++){
      if(!result[dates[i]]){
        result[dates[i]] = 1
      }
      else{
        result[dates[i]] += 1
      }
    }
  }
  for (let keys in result){
    if (result[keys] > longest){
      longest = result[keys]
      final = keys
    }
  }
  return final
}

/////////// CHALLENGE ///////////

// Create and return an object containing the amounts that
// store2 made by selling each type of candy.
// Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
function challenge1() {
  let result = {}
  for (let keys in store2['sale dates']){
    result[keys] = (store2['sale dates'][keys].length * store2['inventory prices'][keys]).toFixed(2)
  }
  return result
}

module.exports = {
  accessesingData1,
  accessesingData2,
  updatingData1,
  updatingData2,
  loopingData1,
  loopingData2,
  challenge1
}
