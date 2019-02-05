function solve([principal, interest, period, timespan]) {
    let rate = interest / 100;
    let frequency = 12 / period;
    let total = principal * Math.pow(1 + rate / frequency, frequency * timespan);
    console.log(total);
}

solve([1500, 4.3, 3, 6]);
solve([100000, 5, 12, 25]);
