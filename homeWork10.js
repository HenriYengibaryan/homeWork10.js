function filter(function,arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(function(arr[i])){
            newArr.push(arr[i])
        }
    }return newArr
}
function find(functionn,arr){
    for(let i=0;i<arr.length;i++){
        if(functionn(arr[i])){
            return arr[i]
        }
    }return
}
function findIndex(functionn,arr){
    for(let i=0;i<arr.length;i++){
        if(functionn(arr[i])){
            return i
        }
    }
    return
}
function mapArr(functionn,arr){
    let newArr=[]
    let p
    for(let i=0;i<arr.length;i++){
        if(functionn(arr[i])){
            newArr.push(arr[i])
        }else{
            newArr.push(p)
        }
    } return newArr
}