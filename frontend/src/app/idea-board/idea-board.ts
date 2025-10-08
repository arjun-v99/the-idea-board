import { Component, inject, NgZone, OnInit } from '@angular/core';
import { IdeaService } from '../services/idea-service';
import { Idea } from '../interfaces/idea-interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-idea-board',
  imports: [ReactiveFormsModule, AsyncPipe, RouterLink],
  templateUrl: './idea-board.html',
  styleUrl: './idea-board.css',
})
export class IdeaBoard implements OnInit {
  ideaName = new FormControl('');
  private apiService = inject(IdeaService);
  private ideasSubject = new BehaviorSubject<Idea[]>([]);
  ideas$ = this.ideasSubject.asObservable();
  private zone = inject(NgZone);

  loadIdeas() {
    this.apiService
      .getIdeas()
      .pipe(map((response) => response.data))
      .subscribe((ideas) => this.ideasSubject.next(ideas));
  }

  postIdea() {
    const idea = this.ideaName.value;
    if (idea && idea.length < 280) {
      this.apiService.postIdea({ idea: idea }).subscribe((result) => {
        if (result.success === true) {
          this.loadIdeas();
          this.ideaName.reset();
        }
      });
    }
  }

  ngOnInit() {
    this.loadIdeas();
  }

  upvoteIdea(ideaId: number) {
    this.apiService.upvoteIdea(ideaId).subscribe({
      next: (res) => {
        if (res.success === true) {
          const updatedIdea = res.data; // backend returns updated idea
          const currentIdeas = this.ideasSubject.value;

          if (updatedIdea) {
            // update the upvoted idea locally
            const updatedIdeas = currentIdeas.map((idea) =>
              idea.id === updatedIdea.id ? updatedIdea : idea
            );
            this.ideasSubject.next(updatedIdeas);
          }
        }
      },
    });
  }
}
