import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
  ];
  viewMode = 'map';//or list

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
}
