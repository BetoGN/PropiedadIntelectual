const fs = require('fs');

// Leer el archivo
let content = fs.readFileSync('js/content.js', 'utf8');

// Contar cuántos backslash-backtick hay
const pattern = '\\`';
let count = 0;
let pos = 0;
while ((pos = content.indexOf(pattern, pos)) !== -1) {
    count++;
    pos++;
}
console.log('Escaped backticks found:', count);

// Reemplazar todos los \` por `
while (content.includes('\\`')) {
    content = content.replace('\\`', '`');
}

// Escribir el archivo corregido
fs.writeFileSync('js/content.js', content, 'utf8');

// Escribir log
fs.writeFileSync('fix_log.txt', 'Fixed ' + count + ' escaped backticks\n');

console.log('File fixed successfully');
