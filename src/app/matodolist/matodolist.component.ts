import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matodolist',
  templateUrl: './matodolist.component.html',
  styleUrls: ['./matodolist.component.css']
})
export class MatodolistComponent implements OnInit {

  // acolades+crochet pour un tableau d'objet
  taches = [];
  index:number=0;
  nom:string="";
  etat:boolean = false;

  constructor() { }

  // methodes
  /**
   * fonction pour ajouter une tache. par defaut son etat est false
   */
  ajouterTache = () =>{
    //une tache doit avoir un nom non null
    if (this.nom != null && this.nom !=""){
      this.taches.push({
        index:this.index,
        nom:this.nom,
        etat:false
      })
      this.index++;
    }
  };

  /**
   * fonction pour trouver une tache par son id et retourne la tache trouvé.
   * @param id de la tache à trouver
   */
  trouverTache = (id:number) =>{
    let returnTache;
    this.taches.forEach(tache => {
      if(tache.index == id){
        returnTache = tache;
      }
    });
    return returnTache;
  }

  /**
   * fonction pour activer/desactiver la modification d champs nom d'une tache
   * @param id  de la tache à modifier
   */
  modifiernomTache = (id:number) =>{
    let modifTache = this.trouverTache(id);
    if(modifTache.modification == false){
      modifTache.modification = true;
    } else {
      modifTache.modification = false;
    }
  };
  /**
   * fonction pour changer l'etat d'une tache
   * @param id de la tache à modifier.
   */
  modifierEtatTache = (id:number) =>{
    let modifTache = this.trouverTache(id);
    if (modifTache.etat == false){
      modifTache.etat = true;
    } else {
      modifTache.etat = false;
    }
    
  };

  /**
   * fonction pour supprmer une tache.
   * @param id 
   */
  supprimerTache = (id:number) =>{
    let suppTache = this.trouverTache(id);
    let idsupp = this.taches.indexOf(suppTache);
    this.taches.splice(idsupp, 1);
  };


  ngOnInit(): void {
  }

}
