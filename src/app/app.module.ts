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
import { ParentComponent } from './heritage/parent/parent.component';
import { EnfantComponent } from './heritage/enfant/enfant.component';
import { AffichageparentComponent } from './ExoHeritage/affichageparent/affichageparent.component';
import { FormulaireEnfantComponent } from './ExoHeritage/formulaire-enfant/formulaire-enfant.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    MatodolistComponent,
    TodocorrectionComponent,
    FormulaireDeBaseComponent,
    FormulaireDynamiqueComponent,
    ParentComponent,
    EnfantComponent,
    AffichageparentComponent,
    FormulaireEnfantComponent,
    ErrorComponent,
    NavbarComponent
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
