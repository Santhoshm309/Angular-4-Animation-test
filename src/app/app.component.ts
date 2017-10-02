
import {
  AfterViewInit, Component, ElementRef, ViewChild, trigger,
  state,
  style,
  transition,
  animate,
  keyframes, OnInit
} from '@angular/core';
import {TweenMax} from 'gsap';
import {TimelineMax} from 'gsap';
import {Linear} from 'gsap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('rotateSun', [
      transition('*<=>*', [
        style({
          transform: 'rotate(180deg)',
        })
        ,animate('980ms')] ),
    ]),


  ]
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'app';
  shaObj : any;
  hash : String;
  astrounaut1 : any;
  @ViewChild('sun') sun : ElementRef;
  anim : any;
  state: boolean = true;

  ngAfterViewInit(){
    setInterval(() => {
      this.state = !this.state
    }, 1000);
  }

  ngOnInit(){

  }

  constructor( ){

  }

}
