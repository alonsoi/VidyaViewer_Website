import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsUpdateNavigationComponent } from './vendors-update-navigation.component';

describe('VendorsUpdateNavigationComponent', () => {
  let component: VendorsUpdateNavigationComponent;
  let fixture: ComponentFixture<VendorsUpdateNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorsUpdateNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsUpdateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
