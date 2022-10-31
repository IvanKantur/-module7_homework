const obj = {
    name: "John",
    city: "Boston",
    age: 30
};

function showKeys(obj){
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key)
        }
    }
}
showKeys(obj);