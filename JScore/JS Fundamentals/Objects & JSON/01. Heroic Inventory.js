function solve(text) {

    let heroes = [];
    text.forEach(hero => {
        const [name, levelStr, inventory] = hero.split(/\s*\/\s*/g);
        const items = inventory && inventory.split(/\s*,\s*/g) || [];
        const level = +levelStr;
        heroes.push({name, level, items});
    });
    console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Jake / 1000 / Gauss, HolidayGrenade']);
