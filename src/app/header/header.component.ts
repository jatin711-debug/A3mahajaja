import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/classes/student';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() headerInfo!:Student;

  ngOnInit(): void {
  }

}
