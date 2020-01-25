/**
 * Arquivo: loginPage.ts
 * Data: 24/01/2020
 * Author: Fernanda Ferreira
 */

import Page from '../../page';

class Login_Page extends Page {

    get logoImg() {
        const selector = 'new UiSelector().resourceId("net.qa.mobile.treinamento.homolog:id/iv_logo")'
        const logoImg = $(`android=${selector}`)
        return logoImg;
    }

    get nomeAppLbl() {
        const selector = 'new UiSelector().text("TROCA-NOTA")'
        const nomeAppLbl = $(`android=${selector}`)
        return nomeAppLbl;
    }

    get tipoUsuarioLbl() {
        const selector = 'new UiSelector().text("Executor da Inspeção")'
        const tipoUsuarioLbl = $(`android=${selector}`)
        return tipoUsuarioLbl;
    }

    get emailTxt() {
        const selector = 'new UiSelector().text("Email")'
        const emailTxt = $(`android=${selector}`)
        return emailTxt;
    }

    get senhaTxt() {
        const selector = 'new UiSelector().text("Senha")'
        const senhaTxt = $(`android=${selector}`)
        return senhaTxt;
    }

    get entrarBtn() {
        const selector = 'new UiSelector().resourceId("net.qa.mobile.treinamento.homolog:id/btn_entrar")'
        const entrarBtn = $(`android=${selector}`)
        return entrarBtn;
    }

    get tituloMsgValidacao() {
        const selector = 'new UiSelector().resourceId("net.qa.mobile.treinamento.homolog:id/tv_title")'
        const tituloMsgValidacao = $(`android=${selector}`)
        return tituloMsgValidacao;
    }

    get msgValidacao() {
        const selector = 'new UiSelector().resourceId("net.qa.mobile.treinamento.homolog:id/tv_message")'
        const tituloMsgValidacao = $(`android=${selector}`)
        return tituloMsgValidacao;
    }

    open(){
        browser.url('/')
    }
}

const loginPage = new Login_Page();
export default loginPage