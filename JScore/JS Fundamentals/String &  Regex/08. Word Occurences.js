function solve(text, word) {

    const matches = text.match(new RegExp(`\\b${word}\\b`, 'gi')) || [];
    console.log(matches.length);
}

solve('The waterfall was so high, that the child couldn’t see its peak.', 'the');
solve('How do you plan on achieving that? How? How can you even think of that?', 'how');
solve('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');
