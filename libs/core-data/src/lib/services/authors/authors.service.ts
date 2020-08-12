import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '@bba/api-interfaces';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  model = 'authors';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Author[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Author>(this.getUrlWithId(id));
  }

  create(author: Author) {
    return this.http.post(this.getUrl(), author);
  }

  update(author: Author) {
    return this.http.put(this.getUrlWithId(author.id), author);
  }

  delete(author: Author) {
    return this.http.delete(this.getUrlWithId(author.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
