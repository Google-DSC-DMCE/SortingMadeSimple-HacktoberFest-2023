export const insertionSort = (arr) => {
    let i, key, j, count = 1, cars = [],k;
    let n = arr.length;


    
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;

            //logic for table
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
                key: key,
            };
            cars.push(new_obj);


        }
        arr[j + 1] = key;

        //logic for table
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
            key: key,
        };
        cars.push(new_obj);
    }

    console.log(cars);
    return cars;
}

