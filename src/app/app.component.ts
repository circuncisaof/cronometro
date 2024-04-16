import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cronometro';
  mil = 10;
  txt_save:string = 'save';
  text_start:string = 'start';
  text_pause:string = 'pause';
  text_reset:string = 'restore';

  enable = false;
  running = false;
  tInterval: any;
  hours: any = '0' + 0;
  minuts: any = '0' + 0;
  secs: any = '0' + 0;
  mns: any = '0' + 0;
  now_tInverval:any = '0';


  constructor() { }

  ngOnInit():void {}

  start(): void{


  if(!this.running){
    this.running = true;
    this.tInterval = setInterval(() => {
      this.mns++
      this.mns = this.mns < 10 ? '0' + this.mns: this.mns;


      if(this.mns ===100) {
        this.secs++;
        this.secs = this.secs < 10 ? '0' + this.secs:this.secs;
        this.mns = '0'+0
      }

      if(this.secs === 60){
        this.minuts++;
        this.minuts = this.minuts < 10 ? '0' + this.minuts : this.minuts < 10 ?  '0' + this.minuts: this.minuts;
        this.secs = '0' + 0
      }


      if(this.minuts === 60){
        this.hours++;
        this.hours = this.hours < 10 ? '0' + this.hours : this.hours < 10 ?  '0' + this.hours: this.hours;
        this.minuts = '0' + 0
      }

    }, this.mil)
  }
  }

  pause() {
    clearInterval(this.tInterval)
    this.running = false;
  }

  reset() {
    this.pause();
    this.mns = '0' +0 ;
    this.secs = '0' +0 ;
    this.minuts = '0' +0 ;
    this.hours = '0' +0 ;
  }



}
