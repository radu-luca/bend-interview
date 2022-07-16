import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPipeComponent } from './main-pipe.component';

describe('MainPipeComponent', () => {
  let component: MainPipeComponent;
  let fixture: ComponentFixture<MainPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
