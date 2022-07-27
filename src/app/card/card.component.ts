import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  textColor = 'red'

  //INPUT PAGE
  @Input() post:Post = {
    id:99,
    title: "ciao",
    body:"come stai?",
    active: true
  }
  // @Input() isActivePostPage = true
  @Input() visible:boolean = true
  // @Input() id:number|undefined


  //OUTPUTPAGE
  //1- creo oggetto eventEmitter
  //2- segnalare il tipo di dato che invierà nel partial <>
  //3 - aggiugnere decorator @Output per raggiungere questa proprietà dal component parent
  @Output() dettagliEventEmitter = new EventEmitter<Post>()

  constructor() { }

  ngOnInit(): void {
  }
  // cambiaColor() {
  //   this.textColor = this.textColor == 'red'? 'green' : 'red'
  // }
  // elimina() {
  //   if(confirm("vuoi eliminare l'elemento " + this.post.id))
  //     fetch("url/"+this.post.id, {
  //       method: "DELETE"
  //     }).then()
  // }


  //OUTPUT - fire event
  mostraDettagli(){
    //.emit per inviare l'evento, nel parametro i dati da passare
    this.dettagliEventEmitter.emit(this.post)
  }

}
