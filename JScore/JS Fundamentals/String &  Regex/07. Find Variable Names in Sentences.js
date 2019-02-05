function solve(text) {

    console.log(text
        .match(/\b_([A-Za-z0-9]+)\b/g)
        .map((match) => match.substr(1))
        .join(',')
    );
}

solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');
solve('Calculate the _area of the _perfectRectangle object.');
solve('The _id and _age variables are both integers.');
