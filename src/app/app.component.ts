import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  vishali = 'qwerty';
  special = 'text-special';
  hasError = false;
  isSpecial = true;
  message = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  }
  courses;

  // constructor() {
  constructor(coursesService: CoursesService) {
    // let coursesService = new CoursesService();
    this.courses = coursesService.getCourses();
  }
}

