function solve(name, age, weight, height) {

    let obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / (height * height / 10000))
    };

    obj.status = obj.BMI < 18.5 ? "underweight" : obj.BMI < 25 ? "normal" : obj.BMI < 30 ? "overweight" : "obese";

    if (obj.status === "obese") {
        obj.recommendation = "admission required";
    }

    console.log(obj);
    return obj;
}

solve('Honey Boo Boo', 9, 57, 137);
solve('Peter', 29, 75, 182);

