function solve([a, b, c]) {

    let first = a / 3.6 * c;
    let second = b / 3.6 * c;

    let max = Math.abs(first - second);

    console.log(max);
}

solve([0, 60, 3600]);
solve([11, 10, 120]);
solve([5, -5, 40]);
