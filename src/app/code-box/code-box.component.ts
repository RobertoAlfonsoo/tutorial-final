import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-box',
  imports: [],
  templateUrl: './code-box.component.html',
  styleUrl: './code-box.component.css'
})
export class CodeBoxComponent {

  @Input() code: string = '';  // Se recibe el código desde el componente padre
}