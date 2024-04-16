import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-components',
  templateUrl: './button-components.component.html',
  styleUrls: ['./button-components.component.css']
})
export class ButtonComponentsComponent implements OnInit {
  @Input() text:string ='';
  @Output() somar_mais_1 = new EventEmitter<any>();
  @Output() clickEvent = new EventEmitter<any>();

  constructor(){}

  ngOnInit() {

  }
  somar(){
    this.clickEvent.emit()
  }
}
