import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string =  "youtube.com"
  cursoAngular: boolean = true
  urlImagem: any = 'http://lorempixel.com.br/500/400/?1'


  constructor(){}

  getValor(){
    return 9;
  }

  getCurtirCurso(){
    return true
  }

}
