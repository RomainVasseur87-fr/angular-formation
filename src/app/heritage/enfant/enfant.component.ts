import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  // ceci est un decorateur qui permet de recuperer une variable de parent
  @Input() tableau: [];

  constructor() { }

  ngOnInit(): void {
  }

}
