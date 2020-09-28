const sanitizePorcentual = valor => {
    if (!valor || !valor.length) {
        return valor;
    }
    const numberStr = valor
        .replace(',', '.')
        .replace('%', '');
    return isNaN(numberStr) ? valor : +numberStr;
};

const sanitizeNumber = valor => (valor && valor.length) ? +(valor.replace(/\D/g, '')) : valor;

module.exports = row => {
    row.cep = sanitizeNumber(row.cep);
    row.unidadesJudiciarias = sanitizeNumber(row.unidadesJudiciarias);
    row.estoque = sanitizeNumber(row.estoque);
    row.taxaCongestionamentoLiquida = sanitizePorcentual(row.taxaCongestionamentoLiquida);
    row.taxaCongestionamentoTotal = sanitizePorcentual(row.taxaCongestionamentoTotal);
    return row;
}

