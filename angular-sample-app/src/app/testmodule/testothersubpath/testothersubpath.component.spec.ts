import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestothersubpathComponent } from './testothersubpath.component';

describe('TestothersubpathComponent', () => {
  let component: TestothersubpathComponent;
  let fixture: ComponentFixture<TestothersubpathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestothersubpathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestothersubpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
