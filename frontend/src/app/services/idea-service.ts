import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Idea } from '../interfaces/idea-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  private http = inject(HttpClient);

  API_URL = 'http://localhost:3000/api/';

  getIdeas(): Observable<ApiResponse<Idea[]>> {
    const API_ENDPOINT = `${this.API_URL}ideas/`;
    return this.http.get<ApiResponse<Idea[]>>(API_ENDPOINT);
  }

  postIdea(idea: { idea: string }): Observable<ApiResponse<Idea>> {
    console.log(idea);
    const API_ENDPOINT = `${this.API_URL}ideas/`;
    return this.http.post<ApiResponse<Idea>>(API_ENDPOINT, idea);
  }

  upvoteIdea(ideaId: number): Observable<ApiResponse<Idea>> {
    const API_ENDPOINT = `${this.API_URL}ideas-upvote/${ideaId}/`;
    return this.http.patch<ApiResponse<Idea>>(API_ENDPOINT, { upvote: '1' });
  }
}
