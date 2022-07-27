import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-secondo-component',
  templateUrl: './secondo-component.component.html',
  styleUrls: ['./secondo-component.component.css']
})
export class SecondoComponentComponent implements OnInit {


title=""
  arrInattivi = [
    {title: "D", active: false},
    {title: "E", active: false},
    {title: "F", active: false}
  ]

  constructor(private postSrv:PostService) { }

  ngOnInit(): void {
    // fetch(url).then(res=>res.json()).then((res)=>{
    //   this.arrInattivi = res.filter((e)=>{
    //     return !e.active
    //   })
    // })
// this.arrInattivi = this.postSrv.getPosts(false)
// this.postSrv.getAllPosts().then(res=>{
// this.arrInattivi=res.filter()
// })
  }

  attiva(i:number) {
    // this.postSrv.setX("COME STAI?")
this.postSrv.activePost(i)
this.arrInattivi=this.postSrv.getPosts()
  }


elimina(id:number, i:number){
this.postSrv.deletePost(id, i).then((res)=>{
this.title="ELIMINATO"
})
}

}
