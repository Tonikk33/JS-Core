function solve([x, y, z, x1, y1, z1]) {
    let result = Math.sqrt(
        Math.pow((x - x1), 2)+
        Math.pow((y - y1), 2)+
        Math.pow((z - z1), 2)

    );
    console.log(result);
}

solve([3.5, 0, 1, 0, 2, -1]);

solve([1, 1, 0, 5, 4, 0]);
