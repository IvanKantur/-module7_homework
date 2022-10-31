const obj = {
    name: "John",
    city: "Boston",
    age: 30
};

const str = "age";

function isTheKey(obj, str){
    console.log((str in obj)? true : false)
}
isTheKey(obj, str);