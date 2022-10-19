import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  key = "296c23910c754a02ae9b968b7eef6db9";

  constructor(private http: HttpClient) { }

  artigosId(fonte: string) {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources="+ fonte + "&apiKey=" + this.key);
  }

  iniciarSources() {
    return this.http.get("https://newsapi.org/v2/sources?language=en&apiKey="+this.key);
  }

  iniciarArtigos() {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey="+ this.key);
  }
}
