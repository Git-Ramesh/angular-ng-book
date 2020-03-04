import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-interaction';
  childData: string;
  parentData: string = 'Hello! ';

  addChildData(childData) {
    this.childData = childData;
  }
}
