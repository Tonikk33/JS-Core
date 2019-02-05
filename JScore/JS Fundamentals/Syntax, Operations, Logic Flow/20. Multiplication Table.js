function solve(n) {

    let table = '<table border="1">\n';
    table += '<tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        table += `<th>${i}</th>`;
    }
    table += '</tr>\n';

    for (let i = 1; i <= n; i++) {
        table += `<tr><th>${i}</th>`;
        for (let j = 1; j <= n; j++) {
            table += `<td>${i * j}</td>`;
        }
        table += `<tr>\n`;
    }
    table += '</table>';
    return table;
}

solve(5);
