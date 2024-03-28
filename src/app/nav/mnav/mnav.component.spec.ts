import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNavComponent } from './mnav.component';

describe('MNavComponent', () => {
  let component: MNavComponent;
  let fixture: ComponentFixture<MNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
