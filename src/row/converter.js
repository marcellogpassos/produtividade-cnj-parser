const splitRow = require('./splitter');
const rowKeys = require('./keys');

module.exports = line => {
    const tokens = splitRow(line);
    return Object.fromEntries(rowKeys.map((key, i) => [key, tokens[i].trim()]));
}
