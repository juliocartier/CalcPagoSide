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

  taxaValorH: any
  taxaValor14: any;
  taxaValor30: any;

  taxaParcela1: any;
  taxaParcela2: any;
  taxaParcela3: any;
  taxaParcela4: any;
  taxaParcela5: any;
  taxaParcela6: any;
  taxaParcela7: any;
  taxaParcela8: any;
  taxaParcela9: any;
  taxaParcela10: any;
  taxaParcela11: any;
  taxaParcela12: any;

  constructor(private activatedRoute: ActivatedRoute, private calc: CalcService, private router: Router) {
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
    let somaTaxa;

    this.valorMostrar();

    if (this.prazoRecebimento == 'Hora'){
      taxa = (this.taxaValorH/100);

      if (this.parcelaEsc == 1){
        let taxaParcela = (this.taxaParcela1/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } else if (this.parcelaEsc == 2){
        let taxaParcela = (this.taxaParcela2/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } else if(this.parcelaEsc == 3){
        let taxaParcela = (this.taxaParcela3/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } else if(this.parcelaEsc == 4){
        let taxaParcela = (this.taxaParcela4/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 5){
        let taxaParcela = (this.taxaParcela5/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 6){
        let taxaParcela = (this.taxaParcela6/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 7){
        let taxaParcela = (this.taxaParcela7/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 8){
        let taxaParcela = (this.taxaParcela8/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 9){
        let taxaParcela = (this.taxaParcela9/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 10){
        let taxaParcela = (this.taxaParcela10/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 11){
        let taxaParcela = (this.taxaParcela11/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 12){
        let taxaParcela = (this.taxaParcela12/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }   
      this.calc.taxa(valorDig, somaTaxa, this.parcelaEsc);
      this.calc.reverso(valorDig, somaTaxa, this.parcelaEsc);
      this.router.navigate(['/resultado']);

    } else if (this.prazoRecebimento == 14){
       taxa = (this.taxaValor14/100);

       if (this.parcelaEsc == 1){
        let taxaParcela = (this.taxaParcela1/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } else if (this.parcelaEsc == 2){
        let taxaParcela = (this.taxaParcela2/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } else if(this.parcelaEsc == 3){
        let taxaParcela = (this.taxaParcela3/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } else if(this.parcelaEsc == 4){
        let taxaParcela = (this.taxaParcela4/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 5){
        let taxaParcela = (this.taxaParcela5/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 6){
        let taxaParcela = (this.taxaParcela6/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 7){
        let taxaParcela = (this.taxaParcela7/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 8){
        let taxaParcela = (this.taxaParcela8/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 9){
        let taxaParcela = (this.taxaParcela9/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 10){
        let taxaParcela = (this.taxaParcela10/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 11){
        let taxaParcela = (this.taxaParcela11/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 12){
        let taxaParcela = (this.taxaParcela12/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } 

      this.calc.taxa(valorDig, somaTaxa, this.parcelaEsc);
      this.calc.reverso(valorDig, somaTaxa, this.parcelaEsc);

       this.router.navigate(['/resultado']);
    } else if(this.prazoRecebimento == 30){
      taxa = (this.taxaValor30/100);
      if (this.parcelaEsc == 1){
        let taxaParcela = (this.taxaParcela1/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } else if (this.parcelaEsc == 2){
        let taxaParcela = (this.taxaParcela2/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } else if(this.parcelaEsc == 3){
        let taxaParcela = (this.taxaParcela3/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } else if(this.parcelaEsc == 4){
        let taxaParcela = (this.taxaParcela4/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 5){
        let taxaParcela = (this.taxaParcela5/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 6){
        let taxaParcela = (this.taxaParcela6/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 7){
        let taxaParcela = (this.taxaParcela7/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 8){
        let taxaParcela = (this.taxaParcela8/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 9){
        let taxaParcela = (this.taxaParcela9/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 10){
        let taxaParcela = (this.taxaParcela10/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 11){
        let taxaParcela = (this.taxaParcela11/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      }else if(this.parcelaEsc == 12){
        let taxaParcela = (this.taxaParcela12/100)
        somaTaxa = this.calc.somaTaxa(taxa, taxaParcela);
      } 
      
      
      this.calc.taxa(valorDig, somaTaxa, this.parcelaEsc);
      this.calc.reverso(valorDig, somaTaxa, this.parcelaEsc);

      this.router.navigate(['/resultado']);
    }
  }

  public valorMostrar(){

    this.taxaValorH = this.calc.getTaxasArmazenadas();
    this.taxaValor14 = this.calc.getTaxas14();
    this.taxaValor30 = this.calc.getTaxas30(); 
    this.taxaParcela1 = this.calc.getParcela1();
    this.taxaParcela2 = this.calc.getParcela2();
    this.taxaParcela3 = this.calc.getParcela3();
    this.taxaParcela4 = this.calc.getParcela4();
    this.taxaParcela5 = this.calc.getParcela5();
    this.taxaParcela6 = this.calc.getParcela6();
    this.taxaParcela7 = this.calc.getParcela7();
    this.taxaParcela8 = this.calc.getParcela8();
    this.taxaParcela9 = this.calc.getParcela9();
    this.taxaParcela10 = this.calc.getParcela10();
    this.taxaParcela11 = this.calc.getParcela11();
    this.taxaParcela12 = this.calc.getParcela12();

}


}
