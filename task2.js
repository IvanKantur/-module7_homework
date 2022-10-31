const person = {
    name: "Anna",
    age: 23
};

const str = "age";

function isTheKey(obj, str){
    console.log(str  in obj);

}
isTheKey(person, str)
