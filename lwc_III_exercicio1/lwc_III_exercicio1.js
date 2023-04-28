import { LightningElement } from 'lwc';

export default class Lwc_III_exercicio1 extends LightningElement {

        nome;
        peso;
        altura;
        resultado;
    
        pesoValor(event){    
            this.peso = event.detail.value;
        };
    
        alturaValor(event){    
            this.altura = event.detail.value;
        };
    
        Click() {
            const imc = this.peso / (this.altura * this.altura);
            this.resultado = imc.toFixed(2);
          }          
    }