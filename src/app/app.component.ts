import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  newMeeting = {
    title: '',
    date: '',
    time: ''
  };

  meetings: any[] = [];

  addMeeting() {
    if (this.newMeeting.title && this.newMeeting.date && this.newMeeting.time) {
      this.meetings.push({ ...this.newMeeting });
      this.newMeeting = { title: '', date: '', time: '' };
    }
  }

  removeMeeting(index: number) {
    this.meetings.splice(index, 1);
  }
}
