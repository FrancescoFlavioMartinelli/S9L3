//ng g service Post
import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  // Il service è una classe istanziata all'avvio dell'applicazione e condivisa da tutti quanti i component che la importano

  // private x = "CIAO"

  private arrPosts: any[] = [{
      id: 0,
      title: "asd",
      active: false,
type:"news"
    },
    {
      id: 1,
      title: "asd",
      active: false,
      type:"politics"
    },
    {
      id: 2,
      title: "asd",
      active: true,
      type:"education"
    }
  ]

  fetchPosts() {
    fetch("/posts").then(res => res.json()).then((res: any[]) => {
      this.arrPosts = res
    })
  }

  getPosts(active: boolean) {
    return this.arrPosts
  }

  activePost(i: number) {
    this.arrPosts[i].active = true
  }
  deactivePost(i: number) {
    this.arrPosts[i].active = false
  }


  constructor() {

  }


  getAllPosts() {
    return fetch("").then(res => res.json()).then((res) => {
      this.arrPosts = res
    })
  }

deletePost(id:number, i:number){
return fetch("/"+id, {method: "DELETE"}).then(()=>{
this.arrPosts.slice(i, 1)
})
}

  // getPosts() {
  //   return fetch("")
  // }

  // getX() {
  //   return this.x;
  // }

  // setX(s:string) {
  //   this.x = s
  // }
}
