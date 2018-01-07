import { Component, OnInit } from '@angular/core';
import { trigger,style,query,stagger,animate,keyframes,transition} from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',]
})
export class HomeComponent implements OnInit {

  msg:string = "hello man";
  counter : number=0;
  someText: string = 'binder';
  texter=[];
  constructor() { }

  ngOnInit() {
    this.counter=this.texter.length;
  }
  addItem()
  {
    this.texter.push(this.someText);
    this.someText='';
    this.counter = this.texter.length;
  }

}
