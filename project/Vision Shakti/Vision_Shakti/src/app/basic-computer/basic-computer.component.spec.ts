import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComputerComponent } from './basic-computer.component';

describe('BasicComputerComponent', () => {
  let component: BasicComputerComponent;
  let fixture: ComponentFixture<BasicComputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicComputerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
