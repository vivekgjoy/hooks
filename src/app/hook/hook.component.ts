import { NonNullAssert } from '@angular/compiler';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnChanges, OnDestroy {
  @Input() hookValue: string ='vivek' ;
  
  intervalVariable = 0;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called');

    this.intervalVariable = window.setInterval(() =>{
      console.log(new Date());
    }, 1000);

    // setInterval( () =>{console.log('hello angular')})
  }
  ngOnChanges(): void {
    console.log('ngOnChanges called');
  }

  ngOnDestroy(): void {
    console.log('ngDestroy called');
    if (this.intervalVariable){
      clearInterval(this.intervalVariable);
      
    }
  }

}
