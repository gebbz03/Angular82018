import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersampleComponent } from './serversample.component';

describe('ServersampleComponent', () => {
  let component: ServersampleComponent;
  let fixture: ComponentFixture<ServersampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
