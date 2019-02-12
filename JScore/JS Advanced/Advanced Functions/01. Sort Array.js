function solve(arr, sort) {

    let ascending = ((a, b) => a - b);
    let descending = ((a, b) => b - a);

    let sorting = {
        asc: ascending,
        desc: descending
    };

    console.log(arr.sort(sorting[sort]));
    return arr.sort(sorting[sort]);

}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');
