import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDogListComponent } from './admin-dog-list.component';

describe('AdminDogListComponent', () => {
  let component: AdminDogListComponent;
  let fixture: ComponentFixture<AdminDogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
