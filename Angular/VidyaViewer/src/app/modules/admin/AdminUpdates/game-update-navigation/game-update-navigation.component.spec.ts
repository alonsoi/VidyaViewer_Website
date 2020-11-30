import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameUpdateNavigationComponent } from './game-update-navigation.component';

describe('GameUpdateComponent', () => {
  let component: GameUpdateNavigationComponent;
  let fixture: ComponentFixture<GameUpdateNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameUpdateNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameUpdateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
