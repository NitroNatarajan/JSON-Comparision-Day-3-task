
 //Compare two json objects:
  const obj1 = {
        "name":"person",
        "age":"5"
    };
    const obj2 = {
        "age":"5",
        "name": "person"
    }

    const keysobj1 = Object.keys(obj1);
    const keysobj2 = Object.keys(obj2);
    const valuesobj1 = Object.values(obj1);
    const valuesobj2 = Object.values(obj2);
    let biggestkey = 0;
    if (keysobj1.length>keysobj2.length){
         biggestkey = keysobj1.length;
    }
    if (keysobj1.length<keysobj2.length){
         biggestkey = keysobj1.length;
    }
    else if (keysobj1.length=keysobj2.length){
        biggestkey = keysobj1.length;
    };

    for (let i=0;i<biggestkey; i++){
        if (keysobj1[i]===keysobj2[i] && valuesobj1[i]===valuesobj2[i]){
            console,log(`Both are same objects`);
        }
        else{
            console.log(`${keysobj1[i]}:${valuesobj1[i]}, ${keysobj2[i]} : ${valuesobj2[i]}`);
        }
    };
// answer
// [Running] node "d:\Guvi class\Day4\task\task4.js"
// name:person, age : 5
// age:5, name : person

// [Done] exited with code=0 in 0.097 seconds
// //exercise 2:

// print all the countries,region,subregion and population: 
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    let data = request.response;
    let result = JSON.parse(data);
    for (let i = 0; i < result.length; i++) {
        console.log(`${result[i].name.common} === ${result[i].region} === $${result[i].subregion} ===${result[i].population}`);
    };
};



//use the rest countries API and display all the countries flags in the console:
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    let data = request.response;
    let result = JSON.parse(data);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].flags.png);
    };
};
// results are attached in the results.txt file in this same repository...