const arr = [1,2,9,10]

function medianOfArray(array){
  
  let middleIndex = Math.floor(array.length / 2);
  
  return array.length % 2 !== 0 ? array[middleIndex] : (array[middleIndex - 1] + array[middleIndex]) / 2;
  
}

console.log(medianOfArray(arr))
