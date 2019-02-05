function solve(text) {

    let output = text.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');

    console.log(output);
}

solve('Capitalize these words');
solve('Was that Easy? tRY thIs onE for SiZe!');
