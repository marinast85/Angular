import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InformacaoModule } from './informacao/informacao.module';
import { InstalacaoModule } from './instalacao/instalacao.module';
import { PrincipalModule } from './principal/principal.module';
import { SobreModule } from './sobre/sobre.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrincipalModule,
    SobreModule,
    InstalacaoModule,
    InformacaoModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
