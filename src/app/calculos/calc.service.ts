import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  valorTaxa: any;
  valorReverso: any;

  parcela: any;
  taxaInserida: any;
  valorEntrada: any;

  taxaHora : any;
  taxa14: any;
  taxa30: any;

  debito: any;

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

  getTaxaHora: any;
  getTaxa14: any;
  getTaxa30: any;

  constructor(private storage: Storage) { 

  }

  public taxa(valor: number, taxa: number, parcela: number){
    this.valorTaxa = valor*(1 - taxa);
    this.taxaInserida = taxa;
    this.parcela = parcela;
    this.valorEntrada = valor;
  }

  public reverso(valor: number, taxa: number, parcela: number){
    this.valorReverso = (valor/(1-taxa));
  }

  public somaTaxa(valorTaxa1: number, valorTaxa2: number){
    return valorTaxa1 + valorTaxa2;
  }

  public taxaDebito(valorDebito: any){
    this.debito = valorDebito;
    return this.storage.set('debito', valorDebito);
  }

  public taxasArmazenadas(valorHora: any){
    this.taxaHora = valorHora;
    return this.storage.set('valorHora', valorHora);
  }
  public taxaArma14(valor14: any){
    this.taxa14 = valor14;
    return this.storage.set('valor14', valor14);
  }
  public taxaArma30(valor30: any){
    this.taxa30 = valor30;
    return this.storage.set('valor30', valor30);
  }

  public taxaParcela1(parcela1: any){
    this.parcela1 = parcela1;
    return this.storage.set('parcela1', parcela1);
  }
  public taxaParcela2(parcela2: any){
    this.parcela2 = parcela2;
    return this.storage.set('parcela2', parcela2);
  }
  public taxaParcela3(parcela3: any){
    this.parcela3 = parcela3;
    return this.storage.set('parcela3', parcela3);
  }
  public taxaParcela4(parcela4: any){
    this.parcela4 = parcela4;
    return this.storage.set('parcela4', parcela4);
  }
  public taxaParcela5(parcela5: any){
    this.parcela5 = parcela5;
    return this.storage.set('parcela5', parcela5);
  }
  public taxaParcela6(parcela6: any){
    this.parcela6 = parcela6;
    return this.storage.set('parcela6', parcela6);
  }
  public taxaParcela7(parcela7: any){
    this.parcela7 = parcela7;
    return this.storage.set('parcela7', parcela7);
  }
  public taxaParcela8(parcela8: any){
    this.parcela8 = parcela8;
    return this.storage.set('parcela8', parcela8);
  }
  public taxaParcela9(parcela9: any){
    this.parcela9 = parcela9;
    return this.storage.set('parcela9', parcela9);
  }
  public taxaParcela10(parcela10: any){
    this.parcela10 = parcela10;
    return this.storage.set('parcela10', parcela10);
  }
  public taxaParcela11(parcela11: any){
    this.parcela11 = parcela11;
    return this.storage.set('parcela11', parcela11);
  }
  public taxaParcela12(parcela12: any){
    this.parcela12 = parcela12;
    return this.storage.set('parcela12', parcela12);
  }

  public getTaxaDebito(){

    this.storage.get('debito').then((val) => {
      this.debito = val;
    });

    return this.debito;
  }

  public getTaxasArmazenadas(){

    this.storage.get('valorHora').then((val) => {
      this.getTaxaHora = val;
    });

    return this.getTaxaHora;
  }

  public getTaxas14(){

    this.storage.get('valor14').then((val) => {
      this.getTaxa14 = val;
    });

    return this.getTaxa14;
  }

  public getTaxas30(){

    this.storage.get('valor30').then((val) => {
      this.getTaxa30 = val;
    });

    return this.getTaxa30;
  }

  public getParcela1(){
    this.storage.get('parcela1').then((val) => {
      this.parcela1 = val;
    });
    return this.parcela1;
  }

  public getParcela2(){
    this.storage.get('parcela2').then((val) => {
      this.parcela2 = val;
    });
    return this.parcela2;
  }

  public getParcela3(){
    this.storage.get('parcela3').then((val) => {
      this.parcela3 = val;
    });
    return this.parcela3;
  }

  public getParcela4(){
    this.storage.get('parcela4').then((val) => {
      this.parcela4 = val;
    });
    return this.parcela4;
  }

  public getParcela5(){
    this.storage.get('parcela5').then((val) => {
      this.parcela5 = val;
    });
    return this.parcela5;
  }

  public getParcela6(){
    this.storage.get('parcela6').then((val) => {
      this.parcela6 = val;
    });
    return this.parcela6;
  }

  public getParcela7(){
    this.storage.get('parcela7').then((val) => {
      this.parcela7 = val;
    });
    return this.parcela7;
  }

  public getParcela8(){
    this.storage.get('parcela8').then((val) => {
      this.parcela8 = val;
    });
    return this.parcela8;
  }

  public getParcela9(){
    this.storage.get('parcela9').then((val) => {
      this.parcela9 = val;
    });
    return this.parcela9;
  }

  public getParcela10(){
    this.storage.get('parcela10').then((val) => {
      this.parcela10 = val;
    });
    return this.parcela10;
  }

  public getParcela11(){
    this.storage.get('parcela11').then((val) => {
      this.parcela11 = val;
    });
    return this.parcela11;
  }

  public getParcela12(){
    this.storage.get('parcela12').then((val) => {
      this.parcela12 = val;
    });
    return this.parcela12;
  }

}
