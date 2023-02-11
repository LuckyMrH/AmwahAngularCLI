import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmwahPageNotFoundComponent } from './amwah-page-not-found.component';

describe('AmwahPageNotFoundComponent', () => {
  let component: AmwahPageNotFoundComponent;
  let fixture: ComponentFixture<AmwahPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmwahPageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmwahPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
