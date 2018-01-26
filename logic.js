var findTheWater = (pillars) => {
  let finalArr = {};

  let innerFunc = (arr, arrHolder) => {
    if (arr.length === 0) {
      let waterQuant = findTotalWater(arrHolder);
      finalArr.waterQuant = arrHolder;

    } else {
      arr.forEach((num, i) => {
        if (num > arr[i+1]) {
          arr.shift();
          findTheWater(arr, arrHolder.concat(num));
        } else {
          let waterQuant = findTotalWater(arrHolder);
          finalArr.waterQuant = arrHolder;
        }
      });
    }
  };

  innerFunc(pillars, []);
  return findLargestWater(finalArr);
};




var findTotalWater = (arr) => {
  let total = 0;

 for (var i = 0; i < arr.length; i++) {
   if (i + 2 <= arr.length) {
    arr[i] - arr[i + 2];
   }
 }
};


var findLargestWater = (list) => {
  let finalNum = 0;
  let finalArr;

  for (var key in list) {
    if (key > finalNum) {
      finalArr = list.key;
    }
  }
  return finalArr;
};
