/**
 * Arquivo: geraNomePF.ts
 * Data: 30/10/2018
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let { sample } = require('underscore');
let nomesHomem = require('../util/helpers/pessoa/nomes-homem');
let sobrenomes = require('../util/helpers/pessoa/sobrenomes');

let nomeGravado, nomeContatoGravado, nomeContato2Gravado, data, toFile, stringFile;

class GeraNome_PF {

    public geraPrimeiroNome() {
        let primeiroNome;
        let nomeDoMeio;
        primeiroNome = sample(nomesHomem).split(' ')[0];
        nomeDoMeio = sample(nomesHomem).split(' ')[0];
        var primeiroMeioNome = [primeiroNome, nomeDoMeio].join(' ');
        return primeiroMeioNome;
    }

    public geraSobrenome() {
        let sobrenome;
        sobrenome = sample(sobrenomes).split(' ')[0];
        return sobrenome;
    }

    public geraNomeCompleto() {
        var nomeCompleto;
        nomeCompleto = (GeraNomePF.geraPrimeiroNome() + " " + GeraNomePF.geraSobrenome());

        nomeGravado = {
            nomeG: nomeCompleto
        };

        data = JSON.stringify(nomeGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/nomePF.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeCompleto;

    }

    public geraNomeContato() {
        var nomeCoontato;
        nomeCoontato = (GeraNomePF.geraPrimeiroNome() + " " + GeraNomePF.geraSobrenome());

        nomeContatoGravado = {
            nomeContatoG: nomeCoontato
        };

        data = JSON.stringify(nomeContatoGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/nomeContato.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeCoontato;

    }

    public geraNomeContato2() {
        var nomeCoontato;
        nomeCoontato = (GeraNomePF.geraPrimeiroNome() + " " + GeraNomePF.geraSobrenome());

        nomeContato2Gravado = {
            nomeContato2G: nomeCoontato
        };

        data = JSON.stringify(nomeContato2Gravado);
        toFile = path.join(__dirname, '../../support/util/gravados/nomeContato2.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeCoontato;

    }
}
const GeraNomePF = new GeraNome_PF();
export default GeraNomePF