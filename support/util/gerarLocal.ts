/**
 * Arquivo: gerarLocais.ts
 * Data: 07/01/2019
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let primeiroLocalCompl = require('../util/helpers/localizacao/complemento');
let segundoLocalBairro = require('../util/helpers/localizacao/bairro');

class GerarLocal {

    public geraPrimeiroLocal() {
        let primeiroLocal;
        let localDoMeio;
        primeiroLocal = sample(primeiroLocalCompl).split(' ')[0];
        localDoMeio = sample(primeiroLocalCompl).split(' ')[0];
        var primeiroMeioLocal = [primeiroLocal, localDoMeio].join(' ');
        return primeiroMeioLocal;
    }

    public geraSegundoLocal() {
        let segundoLocal;
        segundoLocal = sample(segundoLocalBairro).split(' ')[0];
        return segundoLocal;
    }

    public geraLocalCompleto() {
        var localCompleto;
        localCompleto = (GeraLocais.geraPrimeiroLocal() + " " + GeraLocais.geraSegundoLocal());
        return localCompleto;
    }
}
const GeraLocais = new GerarLocal();
export default GeraLocais