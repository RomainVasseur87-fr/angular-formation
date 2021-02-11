import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  nom : String = "Marie";

  message:string = "truc binding";

  nombre:number = 3.1415957;

  pourcent:number = 0.25;

  date: any= Date.now();

  users = [
    {name:"jean", age:45},
    {name:"Pierre", age:39},
    {name:"Anne", age:19},

  ];

  user = {name:"bob", age:33};

  img = "https://th.bing.com/th/id/OIP.fRjYMjw7_Ymj8eNXiP5JNAHaEK?w=275&h=180&c=7&o=5&dpr=1.25&pid=1.7"

  constructor() { }
  // ceci est une methode
  hello = (param?: string) =>{
    param ?
      alert("bonjour "+param)
      : alert("bonjour je suis une methode")
  }

  ngOnInit(): void {
  }

}
