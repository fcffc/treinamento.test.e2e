/**
 * Arquivo: geraLocalizacao.ts
 * Data: 13/11/2018
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let logradouro = require('../util/helpers/localizacao/logradouro');
let bairro = require('../util/helpers/localizacao/bairro');
let complemento = require('../util/helpers/localizacao/complemento');
const fs = require('fs');
let path = require('path');
let logradGravado, bairroGravado, complementoGravado, numeroGravado, pontoRefGravado, data, toFile, stringFile;

class Gera_Localizacao {

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

    public geraNumero() {
        var aleatorio = '0123456789';
        var sufixo = '';
        var tamanho = 3
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }

        numeroGravado = {
            nrG: sufixo
        };

        data = JSON.stringify(numeroGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/numero.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return sufixo;
    }

    public geraLogradouro() {
        let lograd;
        lograd = sample(logradouro).split(' ')[0];

        logradGravado = {
            logradG: lograd
        };

        data = JSON.stringify(logradGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/logradouro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return lograd;
    }

    public geraBairro() {
        let bairr;
        bairr = sample(bairro).split(' ')[0];

        bairroGravado = {
            bairroG: bairr
        };

        data = JSON.stringify(bairroGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/bairro.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return bairr;
    }

    public geraComplemento() {
        let comp;
        comp = sample(complemento).split(' ')[0];
        var comple = comp+" "+(this.geraAleatorio());

        complementoGravado = {
            compleG: comple
        };

        data = JSON.stringify(complementoGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/complemento.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return comple
    }

    public geraPontoReferencia() {
        let pontoRef;
        pontoRef = sample(complemento).split(' ')[0];
        var pontoRefe = "Próximo ao "+pontoRef+" "+(this.geraAleatorio());

        pontoRefGravado = {
            pontoRefG: pontoRefe
        };

        data = JSON.stringify(pontoRefGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/pontoRef.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return pontoRefe
    }
}
const GeraLocalizacao = new Gera_Localizacao();
export default GeraLocalizacao