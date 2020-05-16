import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calculos/calc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {

  valorHora: any;
  valor14: any;
  valor30: any;

  constructor(public calc: CalcService, private router: Router) { }

  ngOnInit() {
  }

  public salvarTaxas(){

    let valorHora = this.valorHora;
    let valor14 = this.valor14;
    let valor30 = this.valor30;

    this.calc.taxasArmazenadas(valorHora);

    this.router.navigate(['/folder/Inbox']);

  
  }

}
