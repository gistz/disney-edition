import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonCharacterCardComponent } from './skeleton-character-card.component';

describe('SkeletonCharacterCardComponent', () => {
  let component: SkeletonCharacterCardComponent;
  let fixture: ComponentFixture<SkeletonCharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonCharacterCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonCharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
