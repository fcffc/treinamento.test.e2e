/**
 * Arquivo: listagemViagensPage.ts
 * Data: 24/01/2020
 * Author: Fernanda Ferreira
 */

import Page from '../../page';

class ListagemViagens_Page extends Page {

    get tituloLbl() {
        const selector = 'new UiSelector().textContains("LISTA DE VIAGENS")'
        const tituloLbl = $(`android=${selector}`)
        return tituloLbl;
    }

    get pesquisarBtn() { return $('~Pesquisa'); } //accessibility id

    open() {
        browser.url('/')
    }
}

const listagemViagensPage = new ListagemViagens_Page();
export default listagemViagensPage