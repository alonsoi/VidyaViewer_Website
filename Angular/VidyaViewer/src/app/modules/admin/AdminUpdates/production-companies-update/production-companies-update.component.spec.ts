import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionCompaniesUpdateComponent } from './production-companies-update.component';

describe('ProductionCompaniesUpdateComponent', () => {
  let component: ProductionCompaniesUpdateComponent;
  let fixture: ComponentFixture<ProductionCompaniesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionCompaniesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionCompaniesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
