const splitRow = require('./splitter');

module.exports = line => {
    const tokens = splitRow(line);
    return tokens.length === 15;
}
