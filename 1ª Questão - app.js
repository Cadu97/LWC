import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

//Criar variáveis e atributos

 Empresa = "Sport Clube do Recife";
 CNPJ = 112233445566;
 Endereco = "Ilha do Retiro";
 Produto = "Camisa";
 Descricao = "Camisa do Sport";
 Preco = 350;
 Promocao = "Promoção torcedor";
 Oferta1 = "2 camisas por R$650";
 Oferta2 = "Uniforme completo por R$500 ";
 

visible = true;

trocarDiv(){
this.visible = !this.visible;
}

  }
