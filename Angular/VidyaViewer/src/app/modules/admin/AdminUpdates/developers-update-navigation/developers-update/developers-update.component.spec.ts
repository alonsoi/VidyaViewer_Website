import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersUpdateComponent } from './developers-update.component';

describe('DevelopersUpdateComponent', () => {
  let component: DevelopersUpdateComponent;
  let fixture: ComponentFixture<DevelopersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopersUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
