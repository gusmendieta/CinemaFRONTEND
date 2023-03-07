import { Component,Output, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {
 
  @Input()
  contenidoMarkdown='';

  @Input()
  placeHolderTextArea: string= 'Texto';


  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    console.log(this.contenidoMarkdown)
  }



}
