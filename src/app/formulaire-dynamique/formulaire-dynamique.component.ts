import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormArray } from '@angular/forms'
@Component({
  selector: 'app-formulaire-dynamique',
  templateUrl: './formulaire-dynamique.component.html',
  styleUrls: ['./formulaire-dynamique.component.css']
})
export class FormulaireDynamiqueComponent implements OnInit {

  TeamForm: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.TeamForm = this.fb.group({
      membres : this.fb.array([
        this.fb.control('')
      ])
    })
  };

  get members(): FormArray {
    return this.TeamForm.get("membres")as FormArray;
  };
  /**
   * methode pour ajouter un membre
   */
  addMembre = () => {
    this.members.push(this.fb.control(''));
  };
  /**
   * methode pour soumettre le formulaire
   */
  soumettre = () => {
    console.log(this.TeamForm.value);
  }

  ngOnInit(): void {
  }

}
