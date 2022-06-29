let person={
    names : 'xxx',
    age : 30,
    email : 'yyy'
}
let personjson = JSON.stringify(person);
console.log(personjson);
let personobj = JSON.parse(personjson);
console.log(personobj);
for(let ele in personobj){                       //for in
   console.log(`${ele} : ${personobj[ele]}`);
}
let fruits = ["apple","orange","mango","pomegranate"];
let fruitsjson = JSON.stringify(fruits);
console.log(fruitsjson);
let fruitsarr = JSON.parse(fruitsjson);
console.log(fruitsarr);
for(i=0;i<fruitsarr.length;i++){                 //for
    console.log(fruitsarr[i]);
}
for(let ele of fruitsarr){                       //for of
    console.log(ele);
}
let fruitfun=(ele)=>{                            //forEach()
    console.log(ele);
}
fruits.forEach(fruitfun);
//2.json resume
let resume = {
    about:{
              names:"karthi",
              age:27,
              email:"kk@gmail.com",
              address:{dn:"43",
              vil:"salappalayam",
              pin:"638751"}
    },
    education :{
        school:"GBHSS Uthukuli",
        college:"kce cbe"
    },
    experience:"6 yrs as cnc operator",
}
let resumejson= JSON.stringify(resume);
console.log(resumejson);