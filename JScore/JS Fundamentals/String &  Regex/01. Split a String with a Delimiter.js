function solve(string, decimeter) {

    let spitElements = string.split(decimeter);
    for (let i = 0; i < spitElements.length; i++) {

        console.log(spitElements[i]);
    }
}

solve('One-Two-Three-Four-Five', '-');
solve('http://platform.softuni.bg', '.');
