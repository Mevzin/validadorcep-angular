import { Component, OnInit } from '@angular/core';
import { ViacepService } from '../viacep.service';

interface ResultCepVia {
  cep: string,
  logradouro: string,
  bairro: string,
  localidade: string,
  uf: string,
  erro: Boolean
};

@Component({
  selector: 'app-via-cep-verif',
  templateUrl: './via-cep-verif.component.html',
  styleUrls: ['./via-cep-verif.component.css']
})
export class ViaCepVerifComponent implements OnInit {
  allCeps!: ResultCepVia;
  valido = false;
  padrao = false;

  constructor(private viacepservice: ViacepService) {
    //this.allCeps = [];
   }

  ngOnInit(): void {

  }

  validaCep(cepin: string){
    cepin = cepin.replace(/\D/g, '');
    if(cepin != ""){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cepin)){
        this.getCep(cepin);
      }
    }
    if(cepin.length < 8 || cepin.length > 8){
      this.padrao = false;
    }else if(cepin.length == 8){
      this.padrao = true;
    }
  }
  getCep(cepin: string){

    this.viacepservice.getCEP(cepin)
      .subscribe(post => {
        if(post){
          console.log(post);
          this.allCeps = post
          if(this.allCeps.erro == true){
            this.valido = false;
            this.padrao = false
            console.log("erro")
          }else{
            this.valido = true;
            this.padrao = true;
            console.log("foi")
          }
        }

      });
  }

  sendCep(event: Event ){
    event.preventDefault()
    console.log(event);

  this.viacepservice.saveCep(this.allCeps)
    .subscribe(resposta => {
      console.log("send");
    })
  }
}
