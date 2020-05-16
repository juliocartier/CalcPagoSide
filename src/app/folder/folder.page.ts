import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalcService } from '../calculos/calc.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  //public folder: string;

  valorDig: number;
  plano : any;
  prazoRecebimento: any;

  maquinetas : any = [
  { nome: 'Point Pro'}, 
  { nome: 'Point Mini Chip'},
  { nome: 'Point Mini'}]; 

  prazos : any; 
  parcelas : any;
  parcelaEsc: any; 

  constructor(private activatedRoute: ActivatedRoute, private calc: CalcService, private router: Router) {

    console.log(this.calc.taxaHora);

   }

  ngOnInit() {
   // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onSelectChange(selectedValue: any){
    this.plano = selectedValue.detail.value;
    
    if (this.plano == 'Point Pro'){
      this.prazos = [{ prazo: 'Hora'}, { prazo: 14}, { prazo: 30}];
      this.parcelas = [{ parcela: 1}, { parcela: 2}, { parcela: 3},
        { parcela: 4}, { parcela: 5}, { parcela: 6}, { parcela: 7},
        { parcela: 8}, { parcela: 9}, { parcela: 10}, { parcela: 11},
        { parcela: 12}];
    } else if (this.plano == 'Point Mini Chip') {
      this.prazos = [{ prazo: 'Hora'}, { prazo: 14}, { prazo: 30}];
      this.parcelas = [{ parcela: 1}, { parcela: 2}, { parcela: 3},
        { parcela: 4}, { parcela: 5}, { parcela: 6}, { parcela: 7},
        { parcela: 8}, { parcela: 9}, { parcela: 10}, { parcela: 11},
        { parcela: 12}];
    } else if (this.plano == 'Point Mini'){
      this.prazos = [{ prazo: 'Hora'}, { prazo: 14}, { prazo: 30}];
      this.parcelas = [{ parcela: 1}, { parcela: 2}, { parcela: 3},
        { parcela: 4}, { parcela: 5}, { parcela: 6}, { parcela: 7},
        { parcela: 8}, { parcela: 9}, { parcela: 10}, { parcela: 11},
        { parcela: 12}];
    }
  }

  public calcular(valorDig : number){
    let taxa;

    if (this.prazoRecebimento == 'Hora'){
      taxa = (5.31/100);
      this.calc.taxa(valorDig, taxa, this.parcelaEsc);
      this.router.navigate(['/resultado']);
    } else if (this.prazoRecebimento == 14){
       taxa = (4.36/100);
       this.calc.taxa(valorDig, taxa, this.parcelaEsc);
       this.router.navigate(['/resultado']);
    } else if(this.prazoRecebimento == 30){
      taxa = (3.60/100);
      this.calc.taxa(valorDig, taxa, this.parcelaEsc);
      this.router.navigate(['/resultado']);
    }
  }

  public reverso(valorDig: number){
    let taxa;

    if (this.prazoRecebimento == 'Hora'){
       taxa = (5.31/100);
       this.calc.reverso(valorDig, taxa, this.parcelaEsc);
       this.router.navigate(['/resultado']);
    } else if (this.prazoRecebimento == 14){
       taxa = (4.36/100);
       this.calc.reverso(valorDig, taxa, this.parcelaEsc);
       this.router.navigate(['/resultado']);
    } else if(this.prazoRecebimento == 30){
      taxa = (3.60/100);
      this.calc.reverso(valorDig, taxa, this.parcelaEsc);
      this.router.navigate(['/resultado']);
    }
  }


}
