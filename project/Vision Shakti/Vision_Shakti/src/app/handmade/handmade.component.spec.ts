import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandmadeComponent } from './handmade.component';

describe('HandmadeComponent', () => {
  let component: HandmadeComponent;
  let fixture: ComponentFixture<HandmadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandmadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandmadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
