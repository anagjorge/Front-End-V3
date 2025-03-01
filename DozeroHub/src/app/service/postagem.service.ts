import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor( private httpClient: HttpClient) { }

    token = {
      headers: new HttpHeaders().set('Authorization' , environment.token)
    }

    getAllPostagens(): Observable<Postagem[]>{
     
      return this.httpClient.get<Postagem[]>('http://localhost:8080/postagens', this.token)
      
    }

    postPostagem(postagem: Postagem) : Observable<Postagem>{

      return this.httpClient.post<Postagem>('http://localhost:8080/postagens', postagem, this.token)

    }

}
