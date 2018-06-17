import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassViewComponent } from './sass-view.component';

describe('SassViewComponent', () => {
  let component: SassViewComponent;
  let fixture: ComponentFixture<SassViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
