function solve(text, check) {

    let x = false;
    if (text.startsWith(check)) {

        x = true;
    }
    console.log(x);
}

solve('How have you been?', 'how');
solve('The quick brown fox…', 'The quick brown fox…');
