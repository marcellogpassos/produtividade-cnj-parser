const Pair = require("./pair");
const CryptoJS = require("crypto-js");

class PairSource {

    data = new Map();

    add = input => {
        if (!input || !input.length) {
            return null;
        }

        const descricao = input.trim().toUpperCase();
        const codigo = CryptoJS.MD5(descricao).toString();

        return this.merge(new Pair(codigo, descricao));
    }

    merge = pair => {
        this.data.set(pair.codigo, pair);
        return pair;
    }

    values = () => {
        return Array.from(this.data.values())
            .sort((a, b) => a.descricao.localeCompare(b.descricao));
    }
}

module.exports = PairSource;
