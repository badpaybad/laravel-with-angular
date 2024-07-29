import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsubpathComponent } from './testsubpath.component';

describe('TestsubpathComponent', () => {
  let component: TestsubpathComponent;
  let fixture: ComponentFixture<TestsubpathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsubpathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestsubpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
