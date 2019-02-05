function solve(gon) {

    let degrees = gon * 0.9 % 360;
    if (degrees < 0){
        degrees += 360;
    }
    console.log(degrees);

}

solve(100);
solve(400);
solve(850);
solve(-50);
