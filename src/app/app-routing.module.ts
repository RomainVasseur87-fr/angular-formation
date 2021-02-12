import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AffichageparentComponent } from './ExoHeritage/affichageparent/affichageparent.component';
import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { TodocorrectionComponent } from './todocorrection/todocorrection.component';

const routes: Routes = [
  // creation de la route de base avec son path puis du composant de base qui s'affiche
  {path: "", component : TodocorrectionComponent},
  {path: "heritage", component : AffichageparentComponent},
  // on peut appeler des pages dans des autres pagesavec fonction children
  {path:"formulaire", component :FormulaireDeBaseComponent, 
  children:[
    {path:"dynamique", component : FormulaireDynamiqueComponent}
  ]},
  // ce met en dernier
  {path:"404", component : ErrorComponent},
  // path error qui permet de rediriger vers un autre composant via son path
  {path: "**", redirectTo: "404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
