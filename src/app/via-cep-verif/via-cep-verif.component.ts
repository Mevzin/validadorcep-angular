import { Component, OnInit } from '@angular/core';
import { ViacepService } from '../viacep.service';

interface ResultCepVia {
  cep: string,
  logradouro: string,
  bairro: string,
  localidade: string,
  uf: string
};

@Component({
  selector: 'app-via-cep-verif',
  templateUrl: './via-cep-verif.component.html',
  styleUrls: ['./via-cep-verif.component.css']
})
export class ViaCepVerifComponent implements OnInit {
  allCeps: ResultCepVia[];
  valido = false;

  constructor(private viacepservice: ViacepService) {
    this.allCeps = [];
   }

  ngOnInit(): void {
    this.getCep;
  }

  validaCep(cepin: string){
    cepin = cepin.replace(/\D/g, '');
    if(cepin != ""){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cepin)){
        this.getCep(cepin);
      }
    }
    // if(cepin.length < 8 || cepin.length > 8){
    //   this.valido = false;
    // }else if(cepin.length == 8){
    //   this.valido = true;
    //   this.getCep(cepin);
    // }
  }
  getCep(cepin: string){
    console.log(cepin)
    this.viacepservice.getCEP(cepin)
      .subscribe(post => this.populaCampos(post));
  }
  populaCampos(post: any){
  //  form.setValue({

  //  })
  }
}
