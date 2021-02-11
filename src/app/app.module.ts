import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import {​​​​ FormsModule,ReactiveFormsModule }​​​​ from '@angular/forms';
import { MatodolistComponent } from './matodolist/matodolist.component';
import { TodocorrectionComponent } from './todocorrection/todocorrection.component';
import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    MatodolistComponent,
    TodocorrectionComponent,
    FormulaireDeBaseComponent,
    FormulaireDynamiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
