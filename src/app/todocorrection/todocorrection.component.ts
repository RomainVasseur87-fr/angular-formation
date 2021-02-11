import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Task } from './task'

@Component({
  selector: 'app-todocorrection',
  templateUrl: './todocorrection.component.html',
  styleUrls: ['./todocorrection.component.css']
})
export class TodocorrectionComponent implements OnInit {

  tab: Task[] = [
    { id: Date.now(), task: "repasser", state: false, update:false}
  ]

  constructor() { }

  //methode
  /**
   * methode pour rajouter une tache
   * @param param le nom de la tache
   */
  add = (param: HTMLInputElement) => {
    if (param.value !== "") {
      this.tab.push(
        { id: Date.now(), task: param.value, state: false, update:false })
    }
    param.value = "";
  };

  /**
   * methode pour supprimer une tache
   * @param id de la tache à supprimer
   */
  delete = (id: number) => {
    this.tab = this.tab.filter(x => x.id !== id);
  };
  /**
   * methode pour changer l'etat d'une tache
   * @param task la tache à modifier
   */
  check = (task: Task) => {
    task.state = !task.state;
  }

  /**
   * methode pour changer l'etat modifiable de ma tache
   * @param task la tache dont l'etat modifiable doit etre changer
   */
  update = (task:Task) => {
    if(task.update == false){
      task.update = true;
    } else {
      task.update = false;
    }
  }



  ngOnInit(): void {
  }

}
