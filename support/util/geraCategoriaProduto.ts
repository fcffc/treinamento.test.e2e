/**
 * Arquivo: geraCategoriaProduto.ts
 * Data: 24/09/2019
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let categoria = require('../util/helpers/produto/categoriaProduto');
const fs = require('fs');
let path = require('path');

let categoriaProdutoGravado, data, toFile, stringFile;

class GerarCategoriaPrduto {

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

    public gerarNomeCategoriaProduto() {
        let nomeCategoria;
        nomeCategoria = sample(categoria).split(' ')[0];

        nomeCategoria = nomeCategoria + " Automated "+gerarCategoriaPrduto.geraAleatorio()

        categoriaProdutoGravado = {
            categoriaProdutoG: nomeCategoria
        };

        data = JSON.stringify(categoriaProdutoGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/categoriaProduto.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeCategoria;
    }
}
const gerarCategoriaPrduto = new GerarCategoriaPrduto();
export default gerarCategoriaPrduto