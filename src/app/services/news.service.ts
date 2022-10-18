import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  key = "296c23910c754a02ae9b968b7eef6db9";

  constructor(private http: HttpClient) { }

  getArticlesByID(source: String) {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources="+ source + "&apiKey=" + this.key);
  }

  initSources() {
    return this.http.get("https://newsapi.org/v2/sources?language=en&apiKey="+this.key);
  }

  initArticles() {
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey="+ this.key);
  }
}
