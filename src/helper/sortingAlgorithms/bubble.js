
export const bubbleSort = (arr) => {
    let cars = [], k;
    let n = arr.length, count = 1;

    for (var i = 0; i < n; i++) {

        // Last i elements are already in place
        for (var j = 0; j < (n - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                let iter = "";
                for (k = 0; k < n; k++) {
                    // process.stdout.write(entry + " ");
                    iter = iter.concat(" ", arr[k]);
                };
                // console.log(iter.slice(1));

                iter = iter.slice(1);
                let new_obj = {
                    id: count++,
                    iteration: iter,
                    i_value: i,
                    j_value: j,
                };
                cars.push(new_obj);
            }
        }
    }
    // Print the sorted array
    console.log(cars);
    return cars;
}
