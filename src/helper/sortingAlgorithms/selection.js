const swap = (arr, xp, yp) => {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
};

export const selectionSort = (arr) => {
  let cars = [];
  let i, j, min_idx;
  let n = arr.length;
  let count = 1;

  for (i = 0; i < n - 1; i++) {
    let iter;
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) min_idx = j;

      //logic for table
      iter = "";
      for (let k = 0; k < n; k++) {
        iter = iter.concat(" ", arr[k]);
      }
      iter = iter.slice(1);
      let new_obj = {
        id: count++,
        iteration: iter,
        i_value: i,
        j_value: j,
      };

      cars.push(new_obj);
    }

    swap(arr, min_idx, i);

    //logic for table
    iter = "";

    for (let k = 0; k < n; k++) {
      iter = iter.concat(" ", arr[k]);
    }
    iter = iter.slice(1);

    let new_obj = {
      id: count++,
      iteration: iter,
      i_value: i,
      j_value: j,
    };
    cars.push(new_obj);

    // console.log(iter.slice(1));
  }
  //   console.log(cars);
  return cars;
};
