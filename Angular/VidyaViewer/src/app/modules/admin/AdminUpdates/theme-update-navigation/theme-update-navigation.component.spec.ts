import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeUpdateNavigationComponent } from './theme-update-navigation.component';

describe('ThemeUpdateNavigationComponent', () => {
  let component: ThemeUpdateNavigationComponent;
  let fixture: ComponentFixture<ThemeUpdateNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeUpdateNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeUpdateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
