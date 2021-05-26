import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViaCepVerifComponent } from './via-cep-verif/via-cep-verif.component';
import { TabelaCepValComponent } from './tabela-cep-val/tabela-cep-val.component';

@NgModule({
  declarations: [
    AppComponent,
    ViaCepVerifComponent,
    TabelaCepValComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
