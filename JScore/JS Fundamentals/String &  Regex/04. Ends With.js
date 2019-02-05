function solve(text, check) {

    let x = false;
    if (text.endsWith(check)) {

        x = true;
    }
    console.log(x);
}

solve('This sentence ends with fun?', 'fun?');
solve('This is Houston, we have…', 'We have…');
solve('The new iPhone has no headphones jack.', 'o headphones jack.');
