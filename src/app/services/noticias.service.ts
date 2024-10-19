import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Noticias } from '../interfaces/articulos';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient ) {}

  ObtenerNoticias() {
    return this.http.get<Noticias>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d4f9b34185ed4cc895a22ca44d35ce86');
  }
}
