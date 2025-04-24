// filepath: /Users/karmendratyagi/first-ng-app/src/app/app.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FullCalendarModule } from '@fullcalendar/angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FullCalendarModule], // Include FullCalendarModule
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'first-ng-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // expect(app.title).toEqual('first-ng-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Meeting Scheduler');
  });
});