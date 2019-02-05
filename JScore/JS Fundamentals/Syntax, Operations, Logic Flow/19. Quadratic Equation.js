function solve(a, b, c) {

    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        let x = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);

        let min = Math.min(x, x1);
        let max = Math.max(x, x1);
        console.log(min);
        console.log(max);

    } else if (discriminant === 0) {

        let solution = -b / (2 * a);
        console.log(solution);

    } else {

        console.log('No');
    }
}

solve(5, 2, 1);
solve(1, -12, 36);
solve(6, 11, -35);
