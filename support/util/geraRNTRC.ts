/**
 * Arquivo: geraRNTRC.ts
 * Data: 06/11/2018
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let rntrcGravado, data, toFile, stringFile;

class Gera_RNTRC {

    public geraRntrcAleatorio() {
        var aleatorio = '0123456789';
        var rntrc = '';
        var tamanho = 8
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            rntrc += aleatorio.substring(rnum, rnum + 1);
        }

        rntrcGravado = {
            rntrcG: rntrc
        };

        data = JSON.stringify(rntrcGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/rntrc.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
        
        return rntrc;
    }
}
const GeraRNTRC = new Gera_RNTRC();
export default GeraRNTRC