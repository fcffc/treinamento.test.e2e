/**
 * Arquivo: geraOC.ts
 * Data: 18/09/2019
 * Author: Fernanda Ferreira
 */
const fs = require('fs');
let path = require('path');
let ocViagemGravado, data, toFile, stringFile;

class Gera_OC {

    public GeraOc() {
        var aleatorio = '123456789';
        var oc = '';
        var tamanho = 8
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            oc += aleatorio.substring(rnum, rnum + 1);
        }

        ocViagemGravado = {
            ocViagemG: oc
        };

        data = JSON.stringify(ocViagemGravado);
        toFile = path.join(__dirname, './gravados/ocViagem.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return oc;
    }
}
const geraOC = new Gera_OC();
export default geraOC