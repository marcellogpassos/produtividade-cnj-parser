const PairSource = require("./pair-source");
const UnidadeJudiciaria = require("./unidade-judiciaria");

module.exports = rowList => {
    const sources = {
        justicaSource: new PairSource(),
        tribunalSource: new PairSource(),
        tipoUnidadeSource: new PairSource(),
        classificacaoUnidadeSource: new PairSource(),
    }

    const unidadeJudiciariaList = rowList
        .filter(row => row.codigo && row.codigo.length > 0 && !isNaN(row.codigo))
        .map(row => new UnidadeJudiciaria(
            row.codigo,
            row.unidadeJudiciaria,
            sources.justicaSource.add(row.justica),
            sources.tribunalSource.add(row.tribunal),
            row.uf,
            sources.tipoUnidadeSource.add(row.tipoUnidade),
            sources.classificacaoUnidadeSource.add(row.classificacaoUnidade),
            row.unidadesJudiciarias,
            row.estoque,
            row.taxaCongestionamentoLiquida,
            row.taxaCongestionamentoTotal
        ));

    return {
        justicaList: sources.justicaSource.values(),
        tribunalList: sources.tribunalSource.values(),
        tipoUnidadeList: sources.tipoUnidadeSource.values(),
        classificacaoUnidadeSource: sources.classificacaoUnidadeSource.values(),
        unidadeJudiciariaList
    };
}
