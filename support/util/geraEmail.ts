/**
 * Arquivo: geraEmail.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

class Gera_Email {
    
    public rand() {
        var x = Math.floor((Math.random() * 100) + 1);
        return x;
    }

    public emailEmbarcador() {
        var emailEmb = "embarcador.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailEmb;
    }

    public emailEmbarcadorTransp() {
        var emailEmbTransp = "embarcador.transportador.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailEmbTransp;
    }

    public emailTransportador() {
        var emailTransp = "transportador.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailTransp;
    }

    public emailTenant() {
        var emailTenant = "tenant.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailTenant;
    }

    public emailParceiro() {
        var emailParceiro = "parceiro.at" + GeraEmail.rand() + GeraEmail.rand() + "@gmail.com";
        return emailParceiro;
    }

}
const GeraEmail = new Gera_Email();
export default GeraEmail