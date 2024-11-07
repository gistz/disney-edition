import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReadonlyDetailsComponent } from './user-readonly-details.component';

describe('UserReadonlyDetailsComponent', () => {
  let component: UserReadonlyDetailsComponent;
  let fixture: ComponentFixture<UserReadonlyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReadonlyDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserReadonlyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
