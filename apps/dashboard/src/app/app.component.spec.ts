import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent, SidenavStatus } from './app.component';
import { UiToolbarModule } from '@bba/ui-toolbar';
import { MaterialModule } from '@bba/material';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientTestingModule,
        UiToolbarModule,
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Used to call logout function to improve coverage,
  // logout does nothing
  it('should call logout on toolbar event-logout', () => {
    const spy = jest.spyOn(component, 'logout');

    const toolbar = de.query(By.css('bba-toolbar'));
    toolbar.triggerEventHandler('logout', null);

    expect(spy).toHaveBeenCalled();
  });

  describe('should toggle sidenavStatus on toolbar event-toggleSidenav', () => {
    it('to closed, assumed open on init', () => {
      component.toggleSidenav();

      expect(component.sidenavStatus).toBe(SidenavStatus.CLOSED);
    });

    it('to open, set to closed on start', () => {
      component.sidenavStatus = SidenavStatus.CLOSED;

      component.toggleSidenav();

      expect(component.sidenavStatus).toBe(SidenavStatus.OPENED);
    });
  });
});
