/**
 * Arquivo: menuLateralPage.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

import Page from '../page';

class MenuLateral_Page extends Page {

    get miniLogoImg() { return $('.app-topbar-right'); }
    get menuRetratilClose() { return $('div#root button i'); }
    get menuRetratilOpen() { return $('div[open=""]'); }
    get menuInicio() { return $('//span[text()="Início"]'); }
    get menuLotes() { return $('//span[text()="Lotes"]'); }
    get menuLotesTransportador() { return $('//span[text()="Lotes do Transportador"]'); }
    get menuViagens() { return $('//span[text()="Viagens"]'); }
    get menuOfertas() { return $('//span[text()="Ofertas"]'); }
    get menuCadastros() { return $('div.app-root:nth-child(1) div.app-sidebar:nth-child(4) div.bar ul.menu li.menu-item.has-children:nth-child(7) div.popup-wrapper div:nth-child(1) > span.menu-item-icon'); }
    get conjuntoSubMenuCadastro() { return $('body:nth-child(6) div:nth-child(17) div.ui.right.center.small.basic.inverted.popup.transition.visible.menu-dropdown.menu-sidebar-popup > div.ui.fluid.inverted.vertical.menu'); }
    get subMenuContatos() { return $('//span[text()="Contatos"]'); }
    get subMenuLocais() { return $('//span[text()="Locais"]'); }
    get subMenuTipoCarroceria() { return $('//span[text()="Tipo de Carroceria"]'); }
    get subMenuConjuntoTransportador() { return $('//span[text()="Conjunto Transportador"]'); }
    get subMenuMotoristas() { return $('body:nth-child(6) div:nth-child(17) div.ui.right.center.small.basic.inverted.popup.transition.visible.menu-dropdown.menu-sidebar-popup div.ui.fluid.inverted.vertical.menu > a.item:nth-child(5)'); }
    get subMenuParceiros() { return $('//span[text()="Parceiros"]'); }
    get subMenuProdutos() { return $('//span[text()="Produtos"]'); }
    get subMenuTransportadoras() { return $('//span[text()="Transportadoras"]'); }
    get subMenuUnidadeVeicular() { return $('//span[text()="Unidade Veicular"]'); }
    get menuAdministracao() { return $('//span[text()="Administração"]'); }
    get subMenuPerfis() { return $('//span[text()="Perfis"]'); }
    get subMenuPerfisAplicacao() { return $('//span[text()="Perfis de Aplicação"]'); }
    get subMenuAplicacoes() { return $('//span[text()="Aplicações"]'); }
    get subMenuTenant() { return $('//span[text()="Tenant"]'); }
    get menuConfiguracao() { return $('//span[text()="Configuração"]'); }
    get subMenuAuditoria() { return $('//span[text()="Auditoria"]'); }
    get subMenuUnidadeOrganizacionais() { return $('//span[text()="Unidades Organizacionais"]'); }
    get subMenuUsuarios() { return $('//span[text()="Usuários"]'); }
    get menuEmailLogado() { return $('.text-user'); }
    get subMenuNomeLogadoLbl() { return $('.ant-popover-title'); }
    get subMenuMeuPerfil() { return $('.ant-spin-container > div:nth-child(1)'); }
    get subMenuLogoff() { return $('.ant-spin-container > div:nth-child(2)'); }

    open() {
        browser.url('/')     //provide your additional URL if any. this will append to the baseUrl to form complete URL
    }
}
const MenuLateralPage = new MenuLateral_Page();
export default MenuLateralPage