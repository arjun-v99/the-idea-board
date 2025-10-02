import { Component, inject, OnInit } from '@angular/core';
import { IdeaService } from '../services/idea-service';
import { Idea } from '../interfaces/idea-interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-idea-board',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './idea-board.html',
  styleUrl: './idea-board.css',
})
export class IdeaBoard implements OnInit {
  ideaName = new FormControl('');
  private apiService = inject(IdeaService);
  ideas$!: Observable<Idea[]>;

  loadIdeas() {
    this.ideas$ = this.apiService.getIdeas().pipe(map((response) => response.data));
  }

  postIdea() {
    const idea = this.ideaName.value;
    console.log(idea);
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
    this.apiService.upvoteIdea(ideaId).subscribe((result) => {
      if (result.success === true) {
        this.loadIdeas();
      }
    });
  }
}
