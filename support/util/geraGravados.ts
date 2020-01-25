/**
 * Arquivo: geraGravados.ts
 * Data: 10/07/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');
let path = require('path');
let codigoAmigavelGravado, data, toFile, stringFile, cargaTotalLEGravado, cidadeUFColetaGravado, cidadeUFDescargaGravado;
let localColetaGravado, localDescargaGravado, freteEmpresaPrimGravado, produtoGravado, codigoOfertaGravado, codigoLTGravado;
let freteOfertaGravado, celularGravado, placaCaminhaoGravado, placaCarroceriaPrimGravado, pesoEstimadoGravado, remetenteLEGravado;
let destinatarioLEGravado, riLEGravado, idViagemGravado, ocViagemGravado, cadenciaOfertaGravado, emailTenantGravado, cpfGravado;
var cpfs;

class GeraGravados {

    public gravaCodAmigavelLE(codigo) {

        codigoAmigavelGravado = {
            codigoAmigavelG: codigo
        };

        data = JSON.stringify(codigoAmigavelGravado);
        toFile = path.join(__dirname, './gravados/codigoAmigavelLE.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaCargaTotalLE(carga) {

        cargaTotalLEGravado = {
            cargaTotalLEG: carga
        };

        data = JSON.stringify(cargaTotalLEGravado);
        toFile = path.join(__dirname, './gravados/cargaTotalLE.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaCidadeUFColeta(cidadeUF) {

        cidadeUFColetaGravado = {
            cidadeUFColetaG: cidadeUF
        };

        data = JSON.stringify(cidadeUFColetaGravado);
        toFile = path.join(__dirname, './gravados/cidadeUFColeta.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaCidadeUFDescarga(cidadeUF) {

        cidadeUFDescargaGravado = {
            cidadeUFDescargaG: cidadeUF
        };

        data = JSON.stringify(cidadeUFDescargaGravado);
        toFile = path.join(__dirname, './gravados/cidadeUFDescarga.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaLocalColeta(localColeta) {

        localColetaGravado = {
            localColetaG: localColeta
        };

        data = JSON.stringify(localColetaGravado);
        toFile = path.join(__dirname, './gravados/localColeta.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaLocalDescarga(localDescarga) {

        localDescargaGravado = {
            localDescargaG: localDescarga
        };

        data = JSON.stringify(localDescargaGravado);
        toFile = path.join(__dirname, './gravados/localDescarga.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaFreteEmpresaPrim(freteEmpresa) {

        freteEmpresaPrimGravado = {
            freteEmpresaPrimG: freteEmpresa
        };

        data = JSON.stringify(freteEmpresaPrimGravado);
        toFile = path.join(__dirname, './gravados/freteEmpresaPrim.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaProduto(produto) {

        produtoGravado = {
            produtoG: produto
        };

        data = JSON.stringify(produtoGravado);
        toFile = path.join(__dirname, './gravados/produto.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaCodOferta(codOferta) {

        codigoOfertaGravado = {
            codigoOfertaG: codOferta
        };

        data = JSON.stringify(codigoOfertaGravado);
        toFile = path.join(__dirname, './gravados/codigoOferta.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaCodigoLT(codLT) {

        codigoLTGravado = {
            codigoLTG: codLT
        };

        data = JSON.stringify(codigoLTGravado);
        toFile = path.join(__dirname, './gravados/codigoLT.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaFreteOferta(freteOferta) {

        freteOfertaGravado = {
            freteOfertaG: freteOferta
        };

        data = JSON.stringify(freteOfertaGravado);
        toFile = path.join(__dirname, './gravados/freteOferta.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaCelular(celular) {

        celularGravado = {
            celularG: celular
        };

        data = JSON.stringify(celularGravado);
        toFile = path.join(__dirname, './gravados/celular.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaPlacaCaminhao(placaCaminhao) {

        placaCaminhaoGravado = {
            placaCaminhaoG: placaCaminhao
        };

        data = JSON.stringify(placaCaminhaoGravado);
        toFile = path.join(__dirname, './gravados/placaCaminhao.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaPlacaCarroceriaPrim(placaCarroceria) {

        placaCarroceriaPrimGravado = {
            placaCarroceriaPrimG: placaCarroceria
        };

        data = JSON.stringify(placaCarroceriaPrimGravado);
        toFile = path.join(__dirname, './gravados/placaCarroceriaPrim.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaPesoEstimado(pesoEstimado) {

        pesoEstimadoGravado = {
            pesoEstimadoG: pesoEstimado
        };

        data = JSON.stringify(pesoEstimadoGravado);
        toFile = path.join(__dirname, './gravados/pesoEstimado.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaRemetenteLE(remetente) {

        remetenteLEGravado = {
            remetenteLEG: remetente
        };

        data = JSON.stringify(remetenteLEGravado);
        toFile = path.join(__dirname, './gravados/remetenteLE.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaDestinatarioLE(destinatario) {

        destinatarioLEGravado = {
            destinatarioLEG: destinatario
        };

        data = JSON.stringify(destinatarioLEGravado);
        toFile = path.join(__dirname, './gravados/destinatarioLE.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaRiLE(ri) {

        riLEGravado = {
            riLEG: ri
        };

        data = JSON.stringify(riLEGravado);
        toFile = path.join(__dirname, './gravados/riLE.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaIDViagem(id) {

        idViagemGravado = {
            id_viagem: id
        };

        data = JSON.stringify(idViagemGravado);
        toFile = path.join(__dirname, './gravados/idViagem.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaOCViagem(oc) {

        ocViagemGravado = {
            ocViagemG: oc
        };

        data = JSON.stringify(ocViagemGravado);
        toFile = path.join(__dirname, './gravados/ocViagem.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaCadenciaOferta(tipoCadencia) {

        cadenciaOfertaGravado = {
            cadenciaOfertaG: tipoCadencia
        };

        data = JSON.stringify(cadenciaOfertaGravado);
        toFile = path.join(__dirname, './gravados/cadenciaOferta.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaEmailTenant(email) {

        emailTenantGravado = {
            emailTenantG: email
        };

        data = JSON.stringify(emailTenantGravado);
        toFile = path.join(__dirname, './gravados/emailTenant.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }

    public gravaCPF(cpf) {

        cpfGravado = {
            cpfG: cpfs
        };

        data = JSON.stringify(cpfGravado);
        toFile = path.join(__dirname, './gravados/cpf.json');
        stringFile = toFile.toString();
        fs.writeFile(stringFile, data, (err) => {
            if (err) throw err;
        });
    }
}
const gravados = new GeraGravados();
export default gravados