import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControleComponent } from './feature/controle/controle.component';
import { PlaygroundComponent } from './feature/playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    ControleComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
