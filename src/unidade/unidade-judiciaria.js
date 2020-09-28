class UnidadeJudiciaria {
    codigo;
    unidadeJudiciaria;
    justica;
    tribunal;
    uf;
    tipoUnidade;
    classificacaoUnidade;
    unidadesJudiciarias;
    estoque;
    taxaCongestionamentoLiquida;
    taxaCongestionamentoTotal;


    constructor(codigo, unidadeJudiciaria, justica, tribunal, uf, tipoUnidade, classificacaoUnidade,
                unidadesJudiciarias, estoque, taxaCongestionamentoLiquida, taxaCongestionamentoTotal) {
        this.codigo = codigo;
        this.unidadeJudiciaria = unidadeJudiciaria;
        this.justica = justica;
        this.tribunal = tribunal;
        this.uf = uf;
        this.tipoUnidade = tipoUnidade;
        this.classificacaoUnidade = classificacaoUnidade;
        this.unidadesJudiciarias = unidadesJudiciarias;
        this.estoque = estoque;
        this.taxaCongestionamentoLiquida = taxaCongestionamentoLiquida;
        this.taxaCongestionamentoTotal = taxaCongestionamentoTotal;
    }
}

module.exports = UnidadeJudiciaria;
