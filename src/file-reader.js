const fs = require('fs');
const sanitizeRow = require('./row/sanitizer');
const validateRow = require('./row/validator');
const convertRow = require('./row/converter');
const convertRows = require('./unidade/converter');

const name = 'criminal'
const path = `..\\resources\\input\\${name}.csv`;

const handleValidLines = lines => {
    const validLines = lines.filter(validateRow);
    console.log(`>>> ${validLines.length} valid lines`);
    const rows = validLines.map(line => sanitizeRow(convertRow(line)));
    const output = convertRows(rows);
    fs.writeFile(
        `..\\resources\\output\\output_${name}.json`,
        JSON.stringify(output),
        () => console.log('>>> saída salva!'));
};

const handleInvalidLines = lines => {
    const invalidLines = lines.filter(line => validateRow(line) !== true);
    console.error(`>>> ${invalidLines.length} invalid lines`);
    invalidLines.forEach((line, index) => console.error(`>>> line ${index}`, line));
    invalidLines.length > 0 && fs.writeFile(
        `..\\resources\\output\\output_error_${name}.txt`,
        invalidLines.join('\n'),
        () => console.log('>>> saída salva!'));
};

fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
        console.error('>>> error', err);
    } else {
        const lines = data.split('\n');
        handleValidLines(lines);
        handleInvalidLines(lines);
    }
});
