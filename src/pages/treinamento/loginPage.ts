/**
 * Arquivo: loginPage.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

import Page from '../page';

class LoginPage extends Page {

    get usuarioTxt() { return $('#Username'); }
    get senhaTxt() { return $('#Password'); }
    get lembrarDeMimChecbox() { return $('.form-group.login-remember>label>strong'); }
    get entrarBtn() { return $('.btn.btn-primary.btn-full'); }
    get esqueciSenhaLink() { return $('.esqueceu-senha-text>a'); }
    get logoImg() { return $('.login-header>img'); }
    get validacaoMsg() { return $('.danger.validation-summary-errors>ul>li'); }
    get entrarComoLDCBtn() { return $('.btn.btn-external.btn-ldc>span'); }

    open() {
        browser.url('/')
    }
}
export default new LoginPage
