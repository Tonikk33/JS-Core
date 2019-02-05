function solve(array) {

    let last = +array[array.length - 1];
    for (let i = 0; i < array.length - 1; i += last) {

        console.log(array[i]);
    }
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'tset', '2']);
solve(['1', '2', '3', '4', '5', '6']);
