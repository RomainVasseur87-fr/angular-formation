import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-formulaire-de-base',
  templateUrl: './formulaire-de-base.component.html',
  styleUrls: ['./formulaire-de-base.component.css']
})
export class FormulaireDeBaseComponent implements OnInit {

  userProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userProfileForm = this.fb.group({
      nom : ["bidouille", Validators.required],
      prenom: ["bob", Validators.required],
      age : ["99", [Validators.required,Validators.min(0)]]
    })
  };

  soumettre = () =>{
    if (this.userProfileForm.valid){
      console.log(this.userProfileForm.value);
    } else {
      console.log("error");
    }
  };

  ngOnInit(): void {
  }

}
