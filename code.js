let cell = '';
let celldata = [];
let rowdata = [];
let header = [];
//let firstrow = true
let finaldata=[];
const result = [];
console.log("***********************************************************************************************")
console.log(" Part 2: Expanding Functionality  ")
console.log("***********************************************************************************************")

const csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
for (let i = 0; i < csvData.length; i++) {
  //console.log(csvData[i])
  let data = csvData[i];
  if (data === ',') {
    celldata.push(cell);
    cell = '';
    finaldata=[]
  } else if (data === '\n' || i==csvData.length) {
    celldata.push(cell);
    finaldata=[]
    first = false;
    rowdata.push(celldata)
   
    celldata = []
    cell = ''
  }
  else {
    cell += data;
    finaldata=cell
  }
}
celldata.push(finaldata)
rowdata.push(celldata)
console.log(rowdata)
for (let i = 0; i < rowdata.length; i++) {
  if (rowdata[0][i] != undefined) {
    rowdata[0][i] = rowdata[0][i].toLowerCase()
    header.push(rowdata[0][i])
   
  }
}
//onsole.log(rowdata)
console.log("***********************************************************************************************")
console.log(" Part 3: Transforming Data  ")
console.log("***********************************************************************************************")
for (let i = 1; i < rowdata.length; i++) {
  const row = rowdata[i];
  const obj = {};
  for (let j = 0; j < header.length; j++) {
      obj[header[j]] = row[j];
  }
  result.push(obj);
}
console.log(result)
console.log("***********************************************************************************************")
console.log(" Part 4: Sorting and Manipulating Data")
console.log("***********************************************************************************************")
// 1. Remove the last element from the sorted array
result.pop();

// 2.  Insert the following object at index 1
result.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// 3. Add the following object to the end of the array:
result.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(result);

// 4. Calculate average age of the group 
let totalAgeofthegrp = 0;
for (let i = 0; i < result.length; i++) {
  totalAgeofthegrp += result[i].age;
}
const averageAge = totalAgeofthegrp / result.length;

console.log(`Average age of the group is: ${averageAge}`);

console.log("***********************************************************************************************")
console.log("  Part 5: Full Circle")
console.log("***********************************************************************************************")



  let csv = 'id,name,occupation,age\n';
  for (let i = 0; i < result.length; i++) {
    csv += `${result[i].id},${result[i].name},${result[i].occupation},${result[i].age}\n`;
  }
  
  console.log(csv)









/*
  let row=[]
  let csv=''
for (let i = 0; i < result.length; i++) {
  
  for (let key in result[i]) 
  {
    console.log("888888")
    console.log(key,i)
    console.log("888888")
    row.push(result[i][key]);
   // console.log(result[i][key])
  }
  csv += row.join(', ') + '\n';
}

console.log(csv)
*/
