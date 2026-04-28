import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaageHome } from './maage-home';

describe('MaageHome', () => {
  let component: MaageHome;
  let fixture: ComponentFixture<MaageHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaageHome],
    }).compileComponents();

    fixture = TestBed.createComponent(MaageHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
