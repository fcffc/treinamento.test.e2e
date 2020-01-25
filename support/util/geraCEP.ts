/**
 * Arquivo: geraCEP.ts
 * Data: 13/11/2018
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');
let { sample } = require('underscore');
let ceps = require('../util/helpers/localizacao/cep');
let cepGravado, data, toFile, stringFile;

class Gera_CEP {

    public geraCEPAleatorio() {
        var aleatorio = '0123456789';
        var cep;
        var sufixo = '';
        var tamanho = 5
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }
        cep = "780"+sufixo;

        cepGravado = {
            cepG: cep
        };

        data = JSON.stringify(cepGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/cep.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
        
        return cep;
    }

    public formatar(d) {

        console.log("Valor de d: "+d);
        var format = d.replace(/^(\d{5})(\d)/,"$1-$2");
        return format;
    }

    public geraCepValido() {
        let cep;
        cep = sample(ceps).split(' ')[0];
        return cep;
    }
  
}
const GeraCEP = new Gera_CEP();
export default GeraCEP