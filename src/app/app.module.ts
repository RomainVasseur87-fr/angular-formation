import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import {​​​​ FormsModule }​​​​ from '@angular/forms';
import { MatodolistComponent } from './matodolist/matodolist.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    MatodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
