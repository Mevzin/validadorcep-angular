import { Component, OnInit } from '@angular/core';
import { TabelaService } from '../tabela.service';

interface ResultCep {
  cep: string,
  logradouro: string,
  bairro: string,
  localidade: string,
  uf: string,
  id: string
};

@Component({
  selector: 'app-tabela-cep-val',
  templateUrl: './tabela-cep-val.component.html',
  styleUrls: ['./tabela-cep-val.component.css']
})
export class TabelaCepValComponent implements OnInit {
  allCeps: ResultCep[];


  constructor(private tabelaService: TabelaService) {
    this.allCeps = [];
  }

  ngOnInit(): void {
    this.getAllCeps();
  }

  getAllCeps(){
    this.tabelaService.getJSON()
    .subscribe(post => {
      this.allCeps = post;
    })
  }
}
