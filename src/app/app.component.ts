import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cronometro';
  mil = 1000;

  enable = false;
  running = false;

  tInterval: any;
  days:number = 0;
  hours: number = 0;
  minuts: number = 0;
  secs: number = 0;

  constructor() { }

  ngOnInit():void {}

  start() {
    this.tInterval = setInterval(() => {
      this.secs++;
    }, this.mil)
    this.save(this.tInterval)
  }

  pause(){
    clearInterval(this.tInterval)
  }
  reset() {
    this.secs = 0;
    this.pause()
  }

  save(cronometro:any) {
    console.log(cronometro)
    this.pause()
    
  }
}
