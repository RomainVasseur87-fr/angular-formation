import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  tab = [
    {name:"pierre",age:"45"},
    {name:"joseph",age:"30"},
    {name:"marie",age:"15"},
    {name:"anne",age:"29"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
