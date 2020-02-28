
const array = [1, 2, 4, 591,'392',391, 2,'5',10, 2, '1', 1, 1,'1', 20,'20'];
const numArr = [];
const stringArr = [];

for (item of array) {
  if (typeof item === 'number') {
    numArr.push(item);
  }else {
    stringArr.push(item)
  }
}
+
numArr.sort((a,b) => a-b)
stringArr.sort((a,b)=> a-b)

const newArr = [...numArr, ...stringArr];
let devidedArray = [];

for (let i = 0; i < newArr.length; i+=0) {
  let result = newArr.filter(item => item === newArr[0]);
  if (result.length >1) {
    devidedArray.push(newArr.splice(0, result.length));
  }else {
    devidedArray = devidedArray.concat(newArr.splice(0, result.length))
  }
}

devidedArray.sort();



const foo = (value1, value2 = undefined, value3 = undefined) => {
  let error;
  let r;
  let g;
  let b; 
  if (value2 != undefined && value3 != undefined) 
  {   
      error = "Enter a RGB value within the range of 0-255 for each color";
      r = Number(value1).toString(16);
      g = Number(value2).toString(16);
      b = Number(value3).toString(16);
      let hex = `#${r}${g}${b}`;
      // console.log("rgb", r,g,b);

      let condition1 = Number(value1) > 255 || Number(value2) > 255 || Number(value3) > 255;
      let condition2 = Number(value1) < 0 || Number(value2) < 0 || Number(value3) < 0;
      let condition3 = isNaN(value1) || isNaN(value2) || isNaN(value3);
    
      if (condition1 || condition2 || condition3) {
            return error
      } else {
            return hex;
      }
  }
  else if ((value1.length === 3 || value1.length === 6) && value2 === undefined && value3 === undefined)
  {     
       error = "Enter a 6 character hex alphanumeric value [0-f]";
       let arr = [];
       if (value1.length === 3) {
            for (let i = 0; i < value1.length; i++) {
                arr.push(value1.substring(i, i+1) + value1[i]);
            }
       } else if (value1.length === 6) {
            for (let i = 0; i < value1.length; i += 2) {
               arr.push(value1.substring(i, i+2)); 
       } 
       } else {
          return error
       }
        
       r = arr[0];
       g = arr[1];
       b = arr[2];
        // console.log(r,g,b); 
    
        // 0x transforms a hexadecimal number in decimal
       let rDec = Number("0x" + r);
       let gDec = Number("0x" + g);
       let bDec = Number("0x" + b);
       let rgb = `rgb(${rDec}, ${gDec}, ${bDec})`;
    
       if (isNaN(rDec) || isNaN(gDec) || isNaN(bDec)) {
            return error
       } else {
            return rgb;
       }
  }  
  else
  {
      error = "Enter a valid color input";
      return error
  }
}


console.log(foo("22afeb"));
console.log(foo("34", "drg", "235"));




var y = 10;
var x = 5;

x+=y

