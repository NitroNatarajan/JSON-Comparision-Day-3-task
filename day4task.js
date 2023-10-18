

// To compare the JSON ,we write a function and it would return the True or false after comparing the two objects.
    function compareJson (obj1,obj2){
     const sortedString1 = JSON.stringify(obj1, Object.keys(obj1).sort());
     const sortedString2 = JSON.stringify(obj2, Object.keys(obj2).sort());

     return sortedString1 === sortedString2;
    }

 // Compare two JSON objects:
    function compareJson (obj1,obj2){
      const sortedString1 = JSON.stringify(obj1, Object.keys(obj1).sort());
      const sortedString2 = JSON.stringify(obj2, Object.keys(obj2).sort());

      return sortedString1 === sortedString2;
    }
    const json1 = {
        "name": "person",
        "age": "5"
     };
    const json2 = {
        "age": "5",
        "name": "person"
    }
console.log(compareJson(json1,json2));
VM57:15 true

 // Compare two JSON objects:
  const json1 = {
        "name": "person",
        "age": "5"
    };
    const json2 = {
        "age": "6",
        "name": "person"
    }
console.log(compareJson(json1,json2));
VM64:17 false

//Print all the countries, regions,subregion and populations: 
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
