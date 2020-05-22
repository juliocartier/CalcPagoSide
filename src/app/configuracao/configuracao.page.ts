import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calculos/calc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  debito: any;
  valorHora: any;
  valor14: any;
  valor30: any;

  parcela1: any;
  parcela2: any;
  parcela3: any;
  parcela4: any;
  parcela5: any;
  parcela6: any;
  parcela7: any;
  parcela8: any;
  parcela9: any;
  parcela10: any;
  parcela11: any;
  parcela12: any;

  


  constructor(public calc: CalcService, private router: Router) { 
    //this.valorMostrar();

      this.debito = this.calc.getTaxaDebito();
      this.valorHora = this.calc.getTaxasArmazenadas();
      this.valor14 = this.calc.getTaxas14();
      this.valor30 = this.calc.getTaxas30(); 
      this.parcela1 = this.calc.getParcela1();
      this.parcela2 = this.calc.getParcela2();
      this.parcela3 = this.calc.getParcela3();
      this.parcela4 = this.calc.getParcela4();
      this.parcela5 = this.calc.getParcela5();
      this.parcela6 = this.calc.getParcela6();
      this.parcela7 = this.calc.getParcela7();
      this.parcela8 = this.calc.getParcela8();
      this.parcela9 = this.calc.getParcela9();
      this.parcela10 = this.calc.getParcela10();
      this.parcela11 = this.calc.getParcela11();
      this.parcela12 = this.calc.getParcela12();
  }

  ngOnInit() {
    
  }

  public salvarTaxas(){

    let debito = this.debito;
    let valorHora = this.valorHora;
    let valor14 = this.valor14;
    let valor30 = this.valor30;
    let parcela1 = this.parcela1;
    let parcela2 = this.parcela2;
    let parcela3 = this.parcela3;
    let parcela4 = this.parcela4;
    let parcela5 = this.parcela5;
    let parcela6 = this.parcela6;
    let parcela7 = this.parcela7;
    let parcela8 = this.parcela8;
    let parcela9 = this.parcela9;
    let parcela10 = this.parcela10;
    let parcela11 = this.parcela11;
    let parcela12 = this.parcela12;

    this.calc.taxaDebito(debito);
    this.calc.taxasArmazenadas(valorHora);
    this.calc.taxaArma14(valor14);
    this.calc.taxaArma30(valor30);
    this.calc.taxaParcela1(parcela1);
    this.calc.taxaParcela2(parcela2);
    this.calc.taxaParcela3(parcela3);
    this.calc.taxaParcela4(parcela4);
    this.calc.taxaParcela5(parcela5);
    this.calc.taxaParcela6(parcela6);
    this.calc.taxaParcela7(parcela7);
    this.calc.taxaParcela8(parcela8);
    this.calc.taxaParcela9(parcela9);
    this.calc.taxaParcela10(parcela10);
    this.calc.taxaParcela11(parcela11);
    this.calc.taxaParcela12(parcela12);

    this.router.navigate(['/folder/Inbox']);
  }

  public valorMostrar(){

      this.debito = this.calc.getTaxaDebito();
      this.valorHora = this.calc.getTaxasArmazenadas();
      this.valor14 = this.calc.getTaxas14();
      this.valor30 = this.calc.getTaxas30(); 
      this.parcela1 = this.calc.getParcela1();
      this.parcela2 = this.calc.getParcela2();
      this.parcela3 = this.calc.getParcela3();
      this.parcela4 = this.calc.getParcela4();
      this.parcela5 = this.calc.getParcela5();
      this.parcela6 = this.calc.getParcela6();
      this.parcela7 = this.calc.getParcela7();
      this.parcela8 = this.calc.getParcela8();
      this.parcela9 = this.calc.getParcela9();
      this.parcela10 = this.calc.getParcela10();
      this.parcela11 = this.calc.getParcela11();
      this.parcela12 = this.calc.getParcela12();

  }

}
