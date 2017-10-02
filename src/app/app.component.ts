import {
  AfterViewInit, Component, ElementRef, ViewChild, trigger,
  state,
  style,
  transition,
  animate,
  keyframes, OnInit
} from '@angular/core';
import * as gsap from "gsap";
import TimelineMax = gsap.TimelineMax;
import TweenMax = gsap.TweenMax;
import TweenConfig = gsap.TweenConfig;
import Linear = gsap.Linear;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  shaObj : any;
  hash : String;
  astrounaut1 : any;
  sun : HTMLElement;

  anim : any;
  ngAfterViewInit()
  {
    this.sun = document.getElementById("sun");console.log(this.sun);
    new TimelineMax({repeat: -1})
      .add(TweenMax.to(this.sun, 5, {rotation: +360, ease: Linear.easeNone}));
  }
  constructor( ){

  }

}
