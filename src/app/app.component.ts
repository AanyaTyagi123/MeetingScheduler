// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendar
// import dayGridPlugin from '@fullcalendar/daygrid'; // Import dayGrid plugin
// import interactionPlugin from '@fullcalendar/interaction'; // Import interaction plugin




// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, FormsModule, FullCalendarModule],
//   template:`
//     <h1>Meeting Scheduler</h1>
//     <full-calendar
//       [plugins]="calendarPlugins"
//       [events]="calendarEvents"
//       [headerToolbar]="headerToolbar"
//       [initialView]="'dayGridMonth'"
//       [dateClick]="handleDateClick"
//       [events]="calendarEvents"
//       (eventClick)="handleEventClick($event)"
//       (eventDrop)="handleEventDrop($event)"
//       (dateClick)="handleDateClick($event)"
//     ></full-calendar>
//   `,
//   templateUrl: './app.component.html',
//   styleUrls: []
// })
// export class AppComponent {
//   title = 'first-ng-app'
//   newMeeting = {
//     title: '',
//     date: '',
//     time: ''
//   };

//   meetings: any[] = [];

//   calendarPlugins = [dayGridPlugin, interactionPlugin];
//   headerToolbar = {
//     left: 'prev,next today',
//     center: 'title',
//     right: 'dayGridMonth,dayGridWeek,dayGridDay',
//   };
//   calendarEvents = [
//     { title: 'Meeting 1', date: '2025-04-24' },
//     { title: 'Meeting 2', date: '2025-04-25' },
//   ];

//   handleDateClick(arg: any) {
//     alert(`Date clicked: ${arg.dateStr}`);
//   }
//   addMeeting() {
//     if (this.newMeeting.title && this.newMeeting.date && this.newMeeting.time) {
//       this.meetings.push({ ...this.newMeeting });
//       this.newMeeting = { title: '', date: '', time: '' };
//       alert('Meeting successfully scheduled!');
//     }
//   }
  

//   removeMeeting(index: number) {
//     this.meetings.splice(index, 1);
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar) {}

  newMeeting = {
    title: '',
    date: '',
    time: ''
  };

  meetings: any[] = [];
  minDate: string = new Date().toISOString().split('T')[0];

  addMeeting() {
    if (this.newMeeting.title && this.newMeeting.date && this.newMeeting.time) {
      this.meetings.push({ ...this.newMeeting });
      this.newMeeting = { title: '', date: '', time: '' };
      this.snackBar.open('Meeting successfully scheduled!', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['custom-snackbar']
      });
    }
  }
  editMeeting(index: number) {
  const meeting = this.meetings[index];
  this.newMeeting = { ...meeting };
  this.removeMeeting(index); // optional: remove to replace later
  }


  removeMeeting(index: number) {
    this.meetings.splice(index, 1);
  }
}
