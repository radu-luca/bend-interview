import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSubscribeComponent } from './main-subscribe.component';

describe('MainSubscribeComponent', () => {
  let component: MainSubscribeComponent;
  let fixture: ComponentFixture<MainSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
