import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapViewComponent } from './bootstrap-view.component';

describe('BootstrapViewComponent', () => {
  let component: BootstrapViewComponent;
  let fixture: ComponentFixture<BootstrapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
