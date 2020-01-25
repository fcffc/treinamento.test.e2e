/**
 * Arquivo: geraIE.ts
 * Data: 06/11/2018
 * Author: Fernanda Ferreira
 */

class Gera_IE {

    public geraIE8() {
        var aleatorio = '0123456789';
        var ie8 = '';
        var tamanho = 8
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            ie8 += aleatorio.substring(rnum, rnum + 1);
        }
        
        return ie8;
    }

    public geraIE9() {
        var aleatorio = '0123456789';
        var ie9 = '';
        var tamanho = 9
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            ie9 += aleatorio.substring(rnum, rnum + 1);
        }
        
        return ie9;
    }

    public geraIE10() {
        var aleatorio = '0123456789';
        var ie10 = '';
        var tamanho = 10
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            ie10 += aleatorio.substring(rnum, rnum + 1);
        }
        
        return ie10;
    }

    public geraIE11() {
        var aleatorio = '0123456789';
        var ie11 = '';
        var tamanho = 11
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            ie11 += aleatorio.substring(rnum, rnum + 1);
        }
        
        return ie11;
    }
}
const GeraIE = new Gera_IE();
export default GeraIE