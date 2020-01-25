/**
 * Arquivo: geraNomePJ.ts
 * Data: 06/11/2018
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let { sample } = require('underscore');
let tipo = require('../util/helpers/empresa/tipo-empresa');
let sobrenomes = require('../util/helpers/empresa/sobrenome-empresa');

let nomeCompletoUnidadeVeicularGravado, data, toFile, stringFile, nomeFantasaTransportadoraGravado, nomeCompletoTransportadoraPJGravado;

class GeraNome_PJ {

    public geraNome() {
        let primeiroSobrenome;
        let nomeDoMeio;
        primeiroSobrenome = sample(sobrenomes).split(' ')[0];
        nomeDoMeio = sample(sobrenomes).split(' ')[0];
        var primeiroMeioSobrenome = [primeiroSobrenome, nomeDoMeio].join(' & ');
        return primeiroMeioSobrenome;
    }

    public geraTipoEmpresa() {
        let tipoEmpresa;
        tipoEmpresa = sample(tipo).split(' ')[0];
        return tipoEmpresa;
    }

    public geraNomeCompletoPJ() {
        var nomeCompleto;
        nomeCompleto = (GeraNomePJ.geraNome() + " " + GeraNomePJ.geraTipoEmpresa());
        return nomeCompleto;
    }

    public geraNomeCompletoUnidadeVeicularPJ() {
        var nomeCompleto;
        nomeCompleto = (GeraNomePJ.geraNome() + " " + GeraNomePJ.geraTipoEmpresa());

        nomeCompletoUnidadeVeicularGravado = {
            nomeCompletoUnidadeVeicularG: nomeCompleto
        };

        data = JSON.stringify(nomeCompletoUnidadeVeicularGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/nomePJUnidadeVeicular.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeCompleto;
    }

    public geraNomeCompletoTransportadoraPJ() {
        var nomeCompleto;
        nomeCompleto = ("TRANSP "+GeraNomePJ.geraNome() + " " + GeraNomePJ.geraTipoEmpresa());

        nomeCompletoTransportadoraPJGravado = {
            nomeCompletoTransportadoraPJG: nomeCompleto
        };

        data = JSON.stringify(nomeCompletoTransportadoraPJGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/nomeCompletoTransportadoraPJ.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeCompleto;
    }

    public geraNomeFantasia(nomeCompletoPJ) {

        var nomePJ = nomeCompletoPJ; // o nome completo
        var partes = nomePJ.split(' '); // dividir em partes
        var tipo_empresa = partes.pop(); // remover o tipo empresa com pop e guardar numa variavel
        var primeiros_nomes = partes.join(' '); // criar uma string separada por espaços(' ') com as partes restantes
        var nomeFantasia = `${primeiros_nomes}`; //resultado

        nomeFantasaTransportadoraGravado = {
            nomeFantasaTransportadoraG: nomeFantasia
        };

        data = JSON.stringify(nomeFantasaTransportadoraGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/nomePJFantasiaTransportadora.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });

        return nomeFantasia;
    }
}
const GeraNomePJ = new GeraNome_PJ();
export default GeraNomePJ