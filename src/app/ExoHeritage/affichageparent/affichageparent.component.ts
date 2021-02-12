import { Component, OnInit } from '@angular/core';
import { Utilisateur} from '../Iutilisateur'

@Component({
  selector: 'app-affichageparent',
  templateUrl: './affichageparent.component.html',
  styleUrls: ['./affichageparent.component.css']
})
export class AffichageparentComponent implements OnInit {

  tabUser = [
    {nom:"Bidouille", prenom:"bob",age:42},
    {nom:"Basard", prenom:"hasard",age:33},
  ]
  constructor() { }

  addParent = (utilisateur:Utilisateur) =>{
    this.tabUser.push(utilisateur);
    
  }
  

  ngOnInit(): void {
  }

}
