/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SourceIconComponent } from './source-icon.component';

describe('SourceIconComponent', () => {
  let component: SourceIconComponent;
  let fixture: ComponentFixture<SourceIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
