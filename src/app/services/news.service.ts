import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  API_KEY = 'c6f8b689cf284c65946e3e8660fc4aba';
  constructor(private http: HttpClient) { }

  providerSources() {
    return this.http.get('https://newsapi.org/v2/sources?languange=en&apiKey=' + this.API_KEY);
  }

  articles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc&apiKey=' + this.API_KEY);
  }

  articlesByID(source:string) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+ source+'&apiKey=' + this.API_KEY);
  }

}
