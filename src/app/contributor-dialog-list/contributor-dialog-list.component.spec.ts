import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorDialogListComponent } from './contributor-dialog-list.component';

describe('ContributorDialogListComponent', () => {
  let component: ContributorDialogListComponent;
  let fixture: ComponentFixture<ContributorDialogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorDialogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributorDialogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
