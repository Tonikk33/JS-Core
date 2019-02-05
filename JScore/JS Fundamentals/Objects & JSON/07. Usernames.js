function solve(names) {

    names.sort((a, b) => a.length - b.length || a.localeCompare(b))
        .filter((n, i) => names.indexOf(n) === i)
        .forEach(n => console.log(n));
}

solve(['Ashton', 'Kutcher', 'Ariel', 'Lilly', 'Keyden', 'Aizen', 'Billy', 'Braston']);

solve(['Denise', 'Ignatius', 'Iris', 'Isacc', 'Indie', 'Dean', 'Donatello', 'Enfuego', 'Benjamin', 'Biser',
    'Bounty', 'Renard', 'Rot']);
