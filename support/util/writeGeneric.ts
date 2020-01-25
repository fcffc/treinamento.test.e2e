/**
 * Arquivo: writeGeneric.ts
 * Data: 08/03/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');

let statusMotoristaGravado, tipoVeiculoGravado, qtdeEixoGravado, statusUnidadeVeicularGravado, tipoCarroceriaUnidadeVeicularGravado, data, toFile, stringFile;
let anoExercicioUnidadeVeicularGravado, ufLicenciamentoUnidadeVeicularGravado;

class Gera_Generic {

    public gravaStatusMotoristaG(s) {

        var status = s;

        statusMotoristaGravado = {
            statusMotoristaG: status
        };

        data = JSON.stringify(statusMotoristaGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/statusMotorista.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaTipoVeiculo(tv) {

        var tipoVeiculo = tv;

        tipoVeiculoGravado = {
            tipoVeiculoG: tipoVeiculo
        };

        data = JSON.stringify(tipoVeiculoGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/tipoVeiculo.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaQtdeEixo(qe) {

        var qtdeEixo = qe;

        qtdeEixoGravado = {
            qtdeEixoG: qtdeEixo
        };

        data = JSON.stringify(qtdeEixoGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/qtdeEixo.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaStatusUnidadeVeicularG(suv) {

        var status = suv;

        statusUnidadeVeicularGravado = {
            statusUnidadeVeicularG: status
        };

        data = JSON.stringify(statusUnidadeVeicularGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/statusUnidadeVeicular.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaTipoCarroceriaUnidadeVeicularG(tc) {

        var tipoCarroceria = tc;

        tipoCarroceriaUnidadeVeicularGravado = {
            tipoCarroceriaUnidadeVeicularG: tipoCarroceria
        };

        data = JSON.stringify(tipoCarroceriaUnidadeVeicularGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/tipoCarroceria.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaAnoExercicioUnidadeVeicularG(ae) {

        var anoExercicio = ae;

        anoExercicioUnidadeVeicularGravado = {
            anoExercicioUnidadeVeicularG: anoExercicio
        };

        data = JSON.stringify(anoExercicioUnidadeVeicularGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/anoExercicio.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaUfLicenciamentoUnidadeVeicularG(ufL) {

        var ufLicenciamento = ufL;

        ufLicenciamentoUnidadeVeicularGravado = {
            ufLicenciamentoUnidadeVeicularG: ufLicenciamento
        };

        data = JSON.stringify(ufLicenciamentoUnidadeVeicularGravado);
        toFile = path.join(__dirname, '../../support/util/gravados/ufLicenciamento.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }
}

const GeraGeneric = new Gera_Generic();
export default GeraGeneric