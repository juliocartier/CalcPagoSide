import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  valorTotal: any;
  parcela: any;
  taxaInserida: any;
  valorEntrada: any;

  taxaHora : any;
  taxa14: any;
  taxa30: any;

  constructor() { 

  }


  public taxa(valor: number, taxa: number, parcela: number){
    this.valorTotal = valor*Math.pow((1 - taxa), parcela);
    this.taxaInserida = taxa;
    this.parcela = parcela;
    this.valorEntrada = valor;
  }

  public reverso(valor: number, taxa: number, parcela: number){
    return (valor/(Math.pow(1-taxa, parcela)));
  }

  public taxasArmazenadas(valorHora: any){
    this.taxaHora = valorHora;
  }


}
