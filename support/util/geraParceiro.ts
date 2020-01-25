let { sample } = require('underscore');
let parceiro = require('../util/helpers/parceiro/parceiro');


class Gera_Parceiro {

    
        public geraPrimeiroLocal() {
           
                let parc;
                parc = sample(parceiro);
                return parc;
            }

    }

const geraParceiro = new Gera_Parceiro();
export default geraParceiro