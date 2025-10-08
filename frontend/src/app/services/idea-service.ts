import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Idea, UpvoteResponse } from '../interfaces/idea-interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  private http = inject(HttpClient);

  API_URL = environment.apiUrl;

  getIdeas(): Observable<ApiResponse<Idea[]>> {
    const API_ENDPOINT = `${this.API_URL}/api/ideas/`;
    return this.http.get<ApiResponse<Idea[]>>(API_ENDPOINT);
  }

  postIdea(idea: { idea: string }): Observable<ApiResponse<Idea>> {
    const API_ENDPOINT = `${this.API_URL}/api/ideas/`;
    return this.http.post<ApiResponse<Idea>>(API_ENDPOINT, idea);
  }

  upvoteIdea(ideaId: number): Observable<UpvoteResponse> {
    const API_ENDPOINT = `${this.API_URL}/api/ideas-upvote/${ideaId}/`;
    return this.http.patch<UpvoteResponse>(API_ENDPOINT, { upvote: '1' });
  }
}
