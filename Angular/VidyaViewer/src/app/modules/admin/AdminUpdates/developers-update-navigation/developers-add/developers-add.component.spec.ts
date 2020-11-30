import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersAddComponent } from './developers-add.component';

describe('DevelopersAddComponent', () => {
  let component: DevelopersAddComponent;
  let fixture: ComponentFixture<DevelopersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
