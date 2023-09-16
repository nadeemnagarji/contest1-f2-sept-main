let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
  { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
  { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
];

// 1. Print all developers from the array whose salary is above the average salary of the array.
function PrintHighEarningDevelopers() {
    //Write your code here , just console.log

  let totalSalary = 0;
    for(let obj of arr){
      totalSalary += obj.salary
    }
    let avgSalary = totalSalary/3

    arr.forEach((obj)=>{
      if(obj.salary > avgSalary && obj.profession ==='developer'){
        console.log(obj.name);
      }
    })

}
// 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
const data =  { id: 3, name: 'nadeem', age: 25, profession: 'admin', salary: 900 }
function recursiveAddData() {
   //Write your code here, just console.log
   const userInput = prompt("enter your message")
   if(userInput === "no"){
    console.log(arr)
    return 
  }

  arr.push(data)
  recursiveAddData()
   

}

// 3. Remove the youngest and oldest person from the array.
function removeYoungestAndOldest() {
   //Write your code here, just console.log
        let old = 0 ;
        arr.forEach((obj)=>{
          if(obj.age > old){
            old = obj.age
          }
        })
        let young = 10000
        arr.forEach((obj)=>{
          if(obj.age<young){
            young = obj.age
          }
        })
      

   let newArray = arr.filter((obj)=> obj.age>18 && obj.age<20)
   console.log(newArray);
 
}

// 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
let dummyArray = [
  { id: 4, name: 'will', age: 18, profession: 'singer', salary: 1000 },
  { id: 5, name: 'tom', age: 20, profession: 'developer', salary: 1100 },
  { id: 6, name: 'rahul', age: 19, profession: 'dancer', salary: 900 },
]
function mergeAndFilterProfessions() {
  //Write your code here, just console.log
  let mergedArray = [...arr, ...dummyArray]
  // console.log(mergedArray);

  let uniqueProfessions = {}

  let result = mergedArray.filter((obj)=>{
      if(!(uniqueProfessions[obj.profession])){
        uniqueProfessions[obj.profession] = true;
        return true;
      }else{
        return false;
      }
  })
  // console.log("ANS IS ");
  console.log(result);
  
} 

// 5. Find the person with the highest salary and reduce their salary by 10% as tax.
function applyTax() {
  //Write your code here, just console.log

  let high = 0 
  let index = -1;
  arr.forEach((obj,i)=>{
    if(obj.salary>high){
      high = obj.salary;
      index = i
    }
  })
  
  if(index !== -1){
    let personWithHighestSalary = {...arr[index]}
    personWithHighestSalary.salary = personWithHighestSalary.salary - (personWithHighestSalary.salary * 0.1 )
    arr[index] = personWithHighestSalary
  }
    console.log(arr);
} 

// 6. Check if every person in the array is a developer.
function isEveryoneDeveloper() {
  let check = true
  arr.forEach((obj)=>{
    if(obj.profession !=='developer'){
        check = false;
    }
  })
 console.log(check);
  //Write your code here, just console.log
} 


// 7. Swap the professions of the first and last person in the array.
function swapProfessions() {
  //Write your code here, just console.log
  console.log(arr)
  let temp = arr[0].profession
   arr[0].profession = arr[arr.length - 1 ].profession
   arr[arr.length - 1].profession = temp
  
  console.log(arr)
} 

// 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
function addExperienceProperty() {
  //Write your code here, just console.log
  arr.map((obj) => obj.experience = 1)

  console.log(arr);
}

// 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
function groupByProfession() {
  let ans =  {}
  arr.forEach((obj)=>{
    if(ans.hasOwnProperty(obj.profession)){
      ans[obj.profession]++
    }else{
      ans[obj.profession] = 1
    }
  })
  console.log(ans);
  //Write your code here, just console.log
} 

// 10. Find the person who has a name with the longest length and capitalize their profession.
function capitalizeLongestNamedPersonProfession() {
  let length = 0 
  let index = -1
  arr.forEach((obj,i) =>{
    if(obj.name.length > 0){
      length = obj.name.length
      index = i
    }
  })
  let capitalname = arr[index].name.toUpperCase()
  arr[index].name = capitalname
  console.log(arr);
  //Write your code here, just console.log
} 

// 11. Create a function that shuffles the array in a random order.
function shuffleArray() {
  //Write your code here, just console.log
}

// 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
function rotateArray(n) {
  let arrShift=[];
  let length = arr.length
  for(let i = 0 ;i<(n%length ) ; i++){
    let removedElement = arr.shift()
    arrShift[i] = removedElement
  }

  for(let i = 0 ;i<arrShift.length ; i++){
    
    arr.push(arrShift[i])
  }
  console.log(arr);
  //Write your code here, just console.log
} rotateArray(4)

// 13. Create a function that finds the person with the closest age to a given number.
function findClosestAge(age) {
   //Write your code here, just console.log

 
 
}

// 14. Create a function that checks if there's any repeated name in the array.
function hasRepeatedNames() {
  //Write your code here, just console.log
}
