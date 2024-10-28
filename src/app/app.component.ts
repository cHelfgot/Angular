import { Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'angular-first-project';
  points: {x:number,y:number}[] = [];
  constructor(){}

  ngOnInit():void{
    fromEvent(document,'mousemove')
    .pipe(
      map((event)=>({x:(event as MouseEvent).x,y:(event as MouseEvent).y})),
      tap((point)=>{this.points=[...this.points,point]})
      ).subscribe();
  }


}


