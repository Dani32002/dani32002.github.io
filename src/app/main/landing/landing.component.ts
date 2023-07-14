import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  techs:String[] = ["python", "java", "angular", "SQL", "javascript", "typescript", "github", "C", "HTML", "CSS", "bootstrap", "oracle"];
  constructor() { }

  ngOnInit() {

  }

}
