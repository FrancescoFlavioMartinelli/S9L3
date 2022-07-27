import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent implements OnInit {

  posts:Post[] = []

  constructor() {}

  ngOnInit() {
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

  cambiaPost() {
    // this.posts[0].title = "CIAO COME STAI"
    this.posts.push({
      id:4,
      title:"t4est",
      body:"testtest",
      active: false
    })
  }
}
