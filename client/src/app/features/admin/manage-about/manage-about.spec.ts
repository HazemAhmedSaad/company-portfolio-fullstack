import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaageAbout } from './manage-about';

describe('MaageAbout', () => {
  let component: MaageAbout;
  let fixture: ComponentFixture<MaageAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaageAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(MaageAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
