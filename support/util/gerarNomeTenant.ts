/**
 * Arquivo: gerarNomeTenant.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

let { sample } = require('underscore');
let sobrenomes = require('../util/helpers/empresa/sobrenome-empresa');
let nomesHomem = require('../util/helpers/pessoa/nomes-homem');

class GerarNomeTenant {

    public geraNome() {
        let primeiroSobrenome;
        let nomeDoMeio;
        primeiroSobrenome = sample(sobrenomes).split(' ')[0];
        nomeDoMeio = sample(sobrenomes).split(' ')[0];
        var primeiroMeioSobrenome = [primeiroSobrenome, nomeDoMeio].join(' & ');
        return primeiroMeioSobrenome;
    }

    public geraNomeTenantEmbarcadorPJ() {
        var nomeCompleto;
        nomeCompleto = (gerarNomeTenant.geraNome() + " " + "- Embarcador");
        return nomeCompleto;
    }

    public geraNomeTenantEmbTranspPJ() {
        var nomeCompleto;
        nomeCompleto = (gerarNomeTenant.geraNome() + " " + "- Embarcador - Transportador");
        return nomeCompleto;
    }

    public geraNomeTenantPJ() {
        var nomeCompleto;
        nomeCompleto = (gerarNomeTenant.geraNome() + " " + "- TENANT PJ");
        return nomeCompleto;
    }

    public geraNomeTenantTransportadorPJ() {
        var nomeCompleto;
        nomeCompleto = (gerarNomeTenant.geraNome() + " " + "- Transportador");
        return nomeCompleto;
    }

    public geraNomeTenantTransportadorFrotistaPJ() {
        var nomeCompleto;
        nomeCompleto = (gerarNomeTenant.geraNome() + " " + "- Transportador - Frotista");
        return nomeCompleto;
    }

    public geraNomeTenantFrotistaPJ() {
        var nomeCompleto;
        nomeCompleto = (gerarNomeTenant.geraNome() + " " + "- Frotista");
        return nomeCompleto;
    }

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

    public geraNomeTenantPF() {
        var nomeCompleto;
        nomeCompleto = (gerarNomeTenant.geraPrimeiroNome() + " " + gerarNomeTenant.geraSobrenome() + " " + "- TENANT PF");
        return nomeCompleto;
    }
}
const gerarNomeTenant = new GerarNomeTenant();
export default gerarNomeTenant