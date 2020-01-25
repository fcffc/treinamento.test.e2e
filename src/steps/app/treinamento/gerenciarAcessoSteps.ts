/**
 * Arquivo: gerenciarAcessoSteps.ts
 * Data: 24/01/2020
 * Author: Fernanda Ferreira
 */

let expect = require('chai').expect;
import { binding, given, when, then } from 'cucumber-tsflow';
import loginPage from "../../../pages/app/app-treinamento/loginPage";
import listagemViagensPage from "../../../pages/app/app-treinamento/listagemViagensPage";

@binding()
export class GerenciarAcessoSteps {

    //LOGIN01
    @given(/^eu estou na tela de login do app Treinamento$/)
    public viualizarTelaLogin() {
        loginPage.tipoUsuarioLbl.waitForDisplayed();
        expect(loginPage.tipoUsuarioLbl.getText()).to.contain("Executor da Inspeção");
    }

    @when(/^eu digito corretamente as minhas informações de login "([^"]*)" "([^"]*)"$/)
    public informarDadosLogin(email, senha) {
        loginPage.emailTxt.waitForDisplayed();
        loginPage.emailTxt.setValue(email);
        loginPage.senhaTxt.setValue(senha);
    }

    @when(/^eu clico no botão entrar do app Treinamento$/)
    public clicarBotaoEntrarAppTrocaNota() {
        loginPage.entrarBtn.click();
    }

    @then(/^eu visualizo a tela de lista de viagens$/)
    public visualizarTelaListagemViagemApp() {
        listagemViagensPage.tituloLbl.waitForDisplayed();
        expect(listagemViagensPage.tituloLbl.getText()).to.contain("LISTA DE VIAGENS");
        browser.reset();
    }

    //LOGIN02
    @when(/^eu digito incorretamente as minhas informações de login "([^"]*)" "([^"]*)"$/)
    public informarDadosIncorretosLogin(email, senha) {
        loginPage.emailTxt.waitForDisplayed();
        loginPage.emailTxt.setValue(email);
        loginPage.senhaTxt.setValue(senha);
    }

    @then(/^eu recebo a mensagem de validação "([^"]*)"$/)
    public visualizarMsgValidacaoApp(msg) {
        loginPage.tituloMsgValidacao.waitForDisplayed();
        expect(loginPage.tituloMsgValidacao.getText()).to.contain(msg);
        expect(loginPage.msgValidacao.getText()).to.contain("Apenas usuários do treinamento podem acessar essa área, entre em contato com o administrador do treinamento para regularizar seu acesso.");
    }
}