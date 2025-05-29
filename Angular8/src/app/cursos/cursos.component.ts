import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent{

  nomePortal: string

  cursos: string[]

  cursoService = new CursosService
  constructor(private cursosService: CursosService){
    this.nomePortal = 'https://google.com'

    this.cursos = this.cursoService.getCursos();
  }

}

