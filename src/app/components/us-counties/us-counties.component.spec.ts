import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCountiesComponent } from './us-counties.component';

describe('UsCountiesComponent', () => {
  let component: UsCountiesComponent;
  let fixture: ComponentFixture<UsCountiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsCountiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsCountiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
