function solve(inches){
    let feet = Math.floor(inches / 12);
    let inchesLeft = inches % 12;

    console.log(`${feet}'-${inchesLeft}"`)
}
solve(36);
solve(55);
solve(11);

