import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/classes/student';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Input() footerInfo!:Student;

  ngOnInit(): void {
  }

}
