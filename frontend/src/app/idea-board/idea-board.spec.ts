import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBoard } from './idea-board';

describe('IdeaBoard', () => {
  let component: IdeaBoard;
  let fixture: ComponentFixture<IdeaBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
