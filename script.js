/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((person)=>{
    if(person.profession=='developer'){
      console.log(person);
    }
  })
}

function PrintDeveloperbyForEach() {
  arr.forEach((person)=>{
    if(person.profession=='developer'){
      console.log(person);
    }
  })
  //Write your code here , just console.log
}

function addData() {
  const newEmployee={id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(newEmployee);
  console.log(newEmployee);
  //Write your code here, just console.log
}

function removeAdmin() {
  arr.filter((employee)=>{
  if(employee.profession==='admin'){
    return false;
  }
  else{
    return true;
  }
})
console.log(arr);
  //Write your code here, just console.log
}

function concatenateArray() {
  
  let newArr = [
    { id: 5, name: "sk", age: "33", profession:"admin" },
    { id: 6, name: "pk", age: "44", profession:"intern" },
    { id: 7, name: "mk", age: "55", profession:"developer" },
  ];

  
    newArr.forEach((employee)=>{
      arr.push(employee);
    }
    )
    console.log(arr);
  //Write your code here, just console.log
}
