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
            result[keys][store1[keys][i][0]] = store1[keys][i][1] * store1[keys][i][2]
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

function createObj2_2(store2){
    let result = {}
    for (let keys in store2['sale dates']){
          let dates = store2['sale dates'][keys]
          for (let i = 0; i < dates.length; i++){
            if (!result[dates[i]]){
                result[dates[i]] = {} 
            }
            else if(!result[dates[i]][keys]){
              result[dates[i]][keys] = (dates.length * store2['inventory prices'][keys]).toFixed(2) 
            }
        }
    }
    return result
}


function createObj3(store3){
    let result = {}
    for (let i = 0; i < store3.length; i++){
        let day = store3[i]
        for (let keys in day['inventory sold']){
            let candy = keys
            console.log(candy)
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
    let result = {}
    for(let i = 0; i < store3.length; i++){
        let info = store3[i]
        if(!result[info.date]){
            result[info.date] = {}
        }
        for(let keys in info['inventory sold']){
            result[info.date][keys] = (info['inventory sold'][keys].cost * info['inventory sold'][keys].quantity).toFixed(2)
        }
    }

    return result
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

function createObj4_2(store4){
    let result = {}
    for (let keys in store4){
      console.log(store4[keys]['sold on'])
        for(let i = 0; i < store4[keys]['sold on'].length; i++){
            if(!result[store4[keys]['sold on'][i]]){
                result[store4[keys]['sold on'][i]] = {}
            }
            result[store4[keys]['sold on'][i]][keys] = (store4[keys]['sold on'].length * store4[keys].cost).toFixed(2)
        }
    }
    return result
}