import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { Student } from 'src/classes/student';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  @Input() mainData!:Student;

  season!:string;

  date = new Date();

  ngOnInit(): void {
  }

  seasonCheck(){
    return this.season.toLowerCase()
  }

  btn_1(){
    document.getElementById("myimg")!.style.border = "5px solid purple";
  }

  btn_2(){
    document.getElementById("myimg")!.style.border = "10px solid pink";
  }
}
