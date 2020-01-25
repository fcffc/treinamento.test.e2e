/**
 * Arquivo: logarDeslogarSteps.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

let expect = require('chai').expect;
import LoginPage from '../../pages/treinamento/loginPage';
import { binding, given, when, then } from 'cucumber-tsflow';
import MenuLateralPage from '../../pages/treinamento/menuLateralPage';

// shell.exec('node ./support/util/db/connection-db/select-homolog.js');
// throw "Error";

@binding()
export class LogarDeslogarSteps {

    @given(/^eu estou na tela de login$/)
    public async telaLogin() {
        LoginPage.open();
        expect(LoginPage.usuarioTxt.isDisplayed());
    }

    @when(/^eu digito "([^"]*)" "([^"]*)" corretamete as minhas informações do login$/)
    public dadosLogin(usuario, senha) {
        LoginPage.usuarioTxt.waitForDisplayed();
        LoginPage.usuarioTxt.setValue(usuario);
        LoginPage.senhaTxt.setValue(senha);
    }

    @when(/^eu clico no botão de entrar$/)
    public clicarBtn() {
        LoginPage.entrarBtn.click();
    }

    @then(/^eu visualizo a página home do sistema$/)
    public visualizaHome() {
        MenuLateralPage.menuEmailLogado.waitForDisplayed();
        expect(MenuLateralPage.menuEmailLogado.isDisplayed());
    }

    @when(/^eu digito "([^"]*)" "([^"]*)" incorretamete as minhas informações do login$/)
    public dadosLoginInvalido(usuario, senha) {
        LoginPage.usuarioTxt.waitForDisplayed();
        LoginPage.usuarioTxt.setValue(usuario);
        LoginPage.senhaTxt.setValue(senha);
    }

    @when(/^eu visualizo a página home do sistema Treinamento$/)
    public visualizaHomeTreinamento() {
        MenuLateralPage.menuEmailLogado.waitForDisplayed();
        expect(MenuLateralPage.menuEmailLogado.isDisplayed());
    }

    @when(/^eu clico em logoff$/)
    public clicarLogoff() {
        MenuLateralPage.menuEmailLogado.waitForDisplayed();
        MenuLateralPage.menuEmailLogado.click();
        MenuLateralPage.subMenuLogoff.waitForDisplayed();
        MenuLateralPage.subMenuLogoff.click();
    }

    @then(/^eu sou delogada do sistema$/)
    public expectDeslogado() {
        LoginPage.usuarioTxt.waitForDisplayed();
        expect(LoginPage.usuarioTxt.isDisplayed());
    }

    @then(/^eu visualizo mensagem de validação$/)
    public expectValidacao() {
        expect(LoginPage.validacaoMsg.getText()).to.contain('Usuário ou senha inválido.');
    }
}