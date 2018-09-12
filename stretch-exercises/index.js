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

function createObj1-2(store1){
    let result = {}
    for (let keys in store1){
        result[keys] = {}
        result[keys][store1[keys][0]]
    }
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


function obj4(store4) {
    let result = {}
  for (let keys in store4){
      result[keys] = {}
      result[keys].cost = store4[keys].cost
      result[keys].quantity = store4[keys]['sold on'].length
  }
  return result
}