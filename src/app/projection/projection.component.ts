import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit {


  // title = "asd"

  titles = ["A", "B", "C"]

  constructor() { }

  ngOnInit(): void {
  }

  cambia(i:number) {
    // this.title = "Come stai?"
    this.titles[i] = "X"
  }

}
