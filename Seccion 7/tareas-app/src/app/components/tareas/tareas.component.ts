import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareasList: Tarea[] = [];
  nombreTarea: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTarea(): void {
    let tarea = new Tarea(this.nombreTarea, false);
    this.tareasList.push(tarea);
    this.nombreTarea = '';
  }

  removeTarea(index: number): void {
    this.tareasList.splice(index, 1);
  }

  updateTarea(tarea: Tarea, index: number): void {
    this.tareasList[index].estado = !tarea.estado;
  }

}
