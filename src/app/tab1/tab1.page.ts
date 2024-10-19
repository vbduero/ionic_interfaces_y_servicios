import { Component } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Article, Articulos } from '../interfaces/articulos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public articulos: Article[] = [];

  constructor(private service: NoticiasService) {}

  ngOnInit(){
    this.service.ObtenerNoticias().subscribe((datos) => {
      console.log(datos);
      this.articulos.push(...datos.articles);
    });
  }

}