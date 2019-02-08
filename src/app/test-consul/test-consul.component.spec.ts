import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestConsulComponent } from './test-consul.component';

describe('TestConsulComponent', () => {
  let component: TestConsulComponent;
  let fixture: ComponentFixture<TestConsulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestConsulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestConsulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
