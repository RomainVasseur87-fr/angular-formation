import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utilisateur} from '../Iutilisateur'

@Component({
  selector: 'app-formulaire-enfant',
  templateUrl: './formulaire-enfant.component.html',
  styleUrls: ['./formulaire-enfant.component.css']
})
export class FormulaireEnfantComponent implements OnInit {

  userProfileForm: FormGroup;
  @Output() newUtilisateur = new EventEmitter<Utilisateur>();

  constructor(private fb: FormBuilder) {
    this.userProfileForm = this.fb.group({
      nom: ["machin", Validators.required],
      prenom: ["truc", Validators.required],
      age: ["99",[Validators.required,Validators.min(0)]]
    }) 
    
  }

  soumettre = () =>{
    if (this.userProfileForm.valid){
      //envoyer new user;
      console.log(this.userProfileForm.value);
      this.newUtilisateur.emit(this.userProfileForm.value);
    } else {
      console.log("error");
    }
  }

  ngOnInit(): void {

  }

}
