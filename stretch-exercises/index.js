function createObj1(store1){
    let result = {}
    for (let keys in store1){
        let date = store1[keys]
        for(let i = 0; i < date.length; i++){
            if (!result[date[i][0]]){
                result[date[i][0]] = {}
                result[date[i][0]].price = date[i][1]
                result[date[i][0]].quantity = date[i][2]
            }
        }
    }
    return result
}

function createObj1_2(store1){
    let result = {}
    for (let keys in store1){
        let day = store1[keys]
        result[keys] = {}
        for(let i = 0; i < day.length; i++){
            result[keys][store1[keys][i][0]] = (store1[keys][i][1] * store1[keys][i][2]).toFixed(2)
        }
        
    }
    return result;
}

function createObj2(store2){
    let result = {}
    for(let keys in store2['inventory prices']){
        result[keys] = {}
        result[keys].price = store2['inventory prices'][keys]
    }
    for(let keys2 in store2['sale dates']){
        result[keys2].quantity  =  store2['sale dates'][keys2].length
    }
    return result
}

// console.log(store2)
function createObj2_2(store2){
  let result2_2 = {}
  for(let keys in store2['sale dates']){
    //keys = candy name
    //store2['sale dates'][keys] = array of dates
    let dateArray = store2['sale dates'][keys]
    for(let i = 0; i < dateArray.length; i++){
      if(!result2_2[dateArray[i]]){
        result2_2[dateArray[i]] = {}
      }
      if(!result2_2[dateArray[i]][keys]){
           result2_2[dateArray[i]][keys] = Number((store2['inventory prices'][keys]).toFixed(2))
        }
      else{
        result2_2[dateArray[i]][keys] += Number((store2['inventory prices'][keys]).toFixed(2))
      }
    }  
    // console.log(result2_2)
  }
  return result2_2
}
// createObj2_2(store2)
// function createObj2_2(store2){
//     let result = {}
//     for (let keys in store2['sale dates']){
//           let dates = store2['sale dates'][keys]
//           for (let i = 0; i < dates.length; i++){
//             if (!result[dates[i]]){
//                 result[dates[i]] = {} 
//             }
//             else if(!result[dates[i]][keys]){
//               result[dates[i]][keys] = (dates.length * store2['inventory prices'][keys]).toFixed(2) 
//             }
//         }
//     }
//     return result
// }


function createObj3(store3){
    let result = {}
    for (let i = 0; i < store3.length; i++){
        let day = store3[i]
        for (let keys in day['inventory sold']){
            let candy = keys
            if(!result[candy]){
                result[candy] = {}
                result[candy].cost = day['inventory sold'][keys].cost
                result[candy].quantity = day['inventory sold'][keys].quantity 
            }
            else{
                result[candy].quantity += day['inventory sold'][keys].quantity
            }
        }
    }
    return result
}

function createObj3_2(store3){
    let result3_2 = {}
    for(let i = 0; i < store3.length; i++){
        let info = store3[i]
        if(!result3_2[info.date]){
            result3_2[info.date] = {}
        }
        for(let keys in info['inventory sold']){
            result3_2[info.date][keys] = (info['inventory sold'][keys].cost * info['inventory sold'][keys].quantity).toFixed(2)
        }
    }

    return result3_2
}

    
    function createObj3_2(store3){
    let result3_2 = {}
    for(let i = 0; i < store3.length; i++){
        let info = store3[i]
        if(!result3_2[info.date]){
            result3_2[info.date] = {}
        }
        for(let keys in info['inventory sold']){
            result3_2[info.date][keys] = (info['inventory sold'][keys].cost * info['inventory sold'][keys].quantity).toFixed(2)
        }
    }

    return result3_2
}

function createObj4(store4) {
    let result = {}
  for (let keys in store4){
      result[keys] = {}
      result[keys].cost = store4[keys].cost
      result[keys].quantity = store4[keys]['sold on'].length
  }
  return result
}
console.log(store4)

function createObj4_2(store4){
    let result4_2 = {}
    for (let candies in store4){
      let costSold = store4[candies]
      for(let i = 0; i < costSold['sold on'].length; i++){
        let date = costSold['sold on'][i]
        if(!result4_2[date]){
          result4_2[date] = {}
        }
      }
    }

    for (let dates in result4_2){
      for(let candies in store4){
        result4_2[dates][candies] = 0
      }
    }

    for( let stoCandies in store4){
      let soldArr = store4[stoCandies]['sold on']
      for(let i = 0; i < soldArr.length; i++){
        let soldDate = soldArr[i]
        for(let dates in result4_2){
          for(let resCandies in result4_2[dates]){
            if(stoCandies === resCandies && dates === soldDate){
              result4_2[dates][resCandies] += store4[stoCandies]['cost']
            }
          }
        }
      }
    }
    return result4_2
}





