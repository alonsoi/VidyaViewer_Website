import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersUpdateNavigationComponent } from './developers-update-navigation.component';

describe('DevelopersUpdateNavigationComponent', () => {
  let component: DevelopersUpdateNavigationComponent;
  let fixture: ComponentFixture<DevelopersUpdateNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopersUpdateNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersUpdateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
