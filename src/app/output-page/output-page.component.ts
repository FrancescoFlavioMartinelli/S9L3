import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.css']
})
export class OutputPageComponent implements OnInit {

  posts:Post[] = []

  postDettagli:Post = {
    id:0,
    title: "titolo 1",
    body: "body 1",
    active: true
  }

  numero = 0

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        id:0,
        title: "titolo 1",
        body: "body 1",
        active: true
      },
      {
        id:1,
        title: "titolo 2",
        body: "body 2",
        active: false
      },
      {
        id:2,
        title: "titolo 3",
        body: "body 3",
        active: true
      }
    ]
  }

  dettagli(p:Post) {
    this.postDettagli = p
  }

}
