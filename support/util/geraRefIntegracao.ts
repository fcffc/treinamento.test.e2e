/**
 * Arquivo: geraRefIntegracao.ts
 * Data: 30/04/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');
var riLEGravado, data, toFile, stringFile;

class Gera_RI {

    public geraRIAleatorioP1() {
        var aleatorio = '0123456789';
        var ri = '';
        var tamanho = 10
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            ri += aleatorio.substring(rnum, rnum + 1);
        }

        return ri;
    }

    public geraRIAleatorioP2() {
        var aleatorio = '0123456789';
        var ri = '';
        var tamanho = 18
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            ri += aleatorio.substring(rnum, rnum + 1);
        }

        return ri;
    }

    public geraRICompleto() {

        var ri = (geraRI.geraRIAleatorioP1() + "/" + geraRI.geraRIAleatorioP2());

        riLEGravado = {
            riLEG: ri
        };

        data = JSON.stringify(riLEGravado);
        toFile = path.join(__dirname, './gravados/riLE.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return ri;

    }
}
const geraRI = new Gera_RI();
export default geraRI