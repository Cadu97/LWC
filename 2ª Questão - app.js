import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
 

visible1 = true;
visible2 = false;

trocarDiv(){
this.visible1 = !this.visible1;
this.visible2 = !this.visible2;
}

  }
