import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canSave = true;
  isSelected = true;
  courses = [];
  viewMode = 'map';//or list
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith',
      address: null
    }
  }

  onAdd() {
    this.courses.push({ id: 4, name: "course4" });
  }

  onRemove(cource): void {
    let index = this.courses.indexOf(cource);
    this.courses.splice(index, 1);
  }

  onChange(cource): void {
    cource.name = "UPDATED";
  }

  loadCourses(): void {
    this.courses = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" },
    ];
  }
  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  toggleCanSave() {
    console.log(this.canSave);
    this.canSave = !this.canSave;
  }
}
