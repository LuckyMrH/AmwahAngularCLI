import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmwahMenuComponent } from './amwah-menu.component';

describe('AmwahMenuComponent', () => {
  let component: AmwahMenuComponent;
  let fixture: ComponentFixture<AmwahMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmwahMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmwahMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
