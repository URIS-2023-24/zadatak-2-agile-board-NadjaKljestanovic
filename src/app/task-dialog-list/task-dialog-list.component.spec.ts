import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialogListComponent } from './task-dialog-list.component';

describe('TaskDialogListComponent', () => {
  let component: TaskDialogListComponent;
  let fixture: ComponentFixture<TaskDialogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDialogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDialogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
