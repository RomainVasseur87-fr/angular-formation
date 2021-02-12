import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../Iuser';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  // ceci est un decorateur qui permet de recuperer une variable de parent
  @Input() tableau: [];
  // ceci est un decorateur qui permet d'envoyer un evenement au parent. utilise le eventEmmiter de angular core
  @Output() newUser = new EventEmitter<User>();


  constructor() { }

  /**
   * methode pour envoyé la creation d'un user definis.
   */
  addEnfant = () => {
    this.newUser.emit({name:"jeanne", age:99});
  }

  ngOnInit(): void {
  }

}
