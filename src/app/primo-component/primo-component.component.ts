import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-primo-component',
  templateUrl: './primo-component.component.html',
  styleUrls: ['./primo-component.component.css']
})
export class PrimoComponentComponent implements OnInit {

  arrAttivi = [
    {title: "A", active: true},
    {title: "B", active: true},
    {title: "C", active: true}
  ]

  title = ""

  // Istanzio nel constructor il mio service per accedere ai sui dati e metodi
  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    // fetch(url).then(res=>res.json()).then((res)=>{
    //   this.arrAttivi = res.filter((e)=>{
    //     return e.active
    //   })
    // })
    // this.title = this.postSrv.getX()
this.arrAttivi =this.postSrv.getPosts(true)
  }

  edit(){
    this.title = "ok"
  }

}
