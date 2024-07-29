import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestquerystringComponent } from './testquerystring.component';

describe('TestquerystringComponent', () => {
  let component: TestquerystringComponent;
  let fixture: ComponentFixture<TestquerystringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestquerystringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestquerystringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
