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
    
  }

  ngOnInit(): void {
  }

}
