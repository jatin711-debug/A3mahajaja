import { Component } from '@angular/core';
import { Student } from 'src/classes/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A3mahajaja';
  data:Student ={
    id: 991601086,
    name: 'Jatin Mahajan',
    username: 'mahajaja',
    program: 'Computer System Technician - Software Engineer',
    email:'mahajaja@sheridancollege.ca',
    country: 'Canada',
    picture: 'https://avatars2.githubusercontent.com/u/991601086?s=460&v=4'
  }
}
