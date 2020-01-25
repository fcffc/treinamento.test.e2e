/**
 * Arquivo: gerarProduto.ts
 * Data: 25/11/2018
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let produto = require('../util/helpers/produto/produto');

class GerarPrduto {

    public geraAleatorio() {
        var aleatorio = '0123456789';
        var sufixo = '';
        var tamanho = 3
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }
        return sufixo;
    }

    public gerarNomeProduto() {
        let nomeProd;
        let nomeMeioProd;
        nomeProd = sample(produto).split(' ')[0];
        nomeMeioProd = sample(produto).split(' ')[0];
        var nomeCompProd = [nomeProd, nomeMeioProd].join(' ');
        return (nomeCompProd + " Automated "+gerarProduto.geraAleatorio());
    }

    public gerarNomeInternoProduto(nomeInterno) {
        nomeInterno = (nomeInterno + " Interno");
        return nomeInterno;
    }
}
const gerarProduto = new GerarPrduto();
export default gerarProduto