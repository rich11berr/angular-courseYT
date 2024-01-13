import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable()
export class PostService {

  constructor(private _httpClient: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
