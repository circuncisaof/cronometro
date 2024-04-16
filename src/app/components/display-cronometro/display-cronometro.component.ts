import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-cronometro',
  templateUrl: './display-cronometro.component.html',
  styleUrls: ['./display-cronometro.component.css']
})
export class DisplayCronometroComponent {
  @Input() minuts:number = 0;
  @Input() secs:number = 0;
  @Input() hours:number = 0;
  @Input() mns:number = 0;
}
