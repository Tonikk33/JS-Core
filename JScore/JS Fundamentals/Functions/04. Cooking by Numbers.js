function solve(input) {

    function operation(num, operation) {
        switch (operation) {
            case 'chop':
                return num / 2;
            case 'dice':
                return Math.sqrt(num);
            case 'spice':
                return num + 1;
            case 'bake':
                return num * 3;
            case 'fillet':
                return num * 0.8;
        }
    }

    let num = input[0];

    for (let i = 1; i < input.length; i++) {
        num = operation(num, input[i]);
        console.log(num);
    }
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
