import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNtComponent } from './admin-nt.component';

describe('AdminNtComponent', () => {
  let component: AdminNtComponent;
  let fixture: ComponentFixture<AdminNtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
