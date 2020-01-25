/**
 * Arquivo: geraOrdemVenda.ts
 * Data: 01/08/2018
 * Author: Fernanda Ferreira
 */

class Gera_OrdemVenda {
    
    public rand() {
        var x = Math.floor((Math.random() * 100) + 1);
        return x;
    }

    public numeroOrdemVenda() {
        var numeroOV = GeraOrdemVenda.geraRIPrefixo() + "/" +GeraOrdemVenda.geraRISufixo();
        return numeroOV;
    }

    public geraRIPrefixo() {
        var aleatorio = '0123456789';
        var prefixo = '';
        var tamanho = 10
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            prefixo += aleatorio.substring(rnum, rnum + 1);
        }

        return prefixo;
    }

    public geraRISufixo() {
        var aleatorio = '0123456789';
        var sufixo = '';
        var tamanho = 18
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }

        return sufixo;
    }
}
const GeraOrdemVenda = new Gera_OrdemVenda();
export default GeraOrdemVenda