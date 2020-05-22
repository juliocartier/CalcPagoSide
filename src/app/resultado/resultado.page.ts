import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calculos/calc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  valor: any;
  valorTotal: any;
  parcela: any;
  taxa: any;

  valorR : any;

  constructor(private calcService: CalcService, private router: Router) { 
    this.valor = this.calcService.valorEntrada;
    this.valorTotal = this.calcService.valorTaxa;
    this.parcela = this.calcService.parcela;
    this.taxa = (this.calcService.taxaInserida*100);

    this.valorR = this.calcService.valorReverso;
    
  }

  ngOnInit() {
  }

  public voltar(){
  this.router.navigate(['/']);
  }

}
