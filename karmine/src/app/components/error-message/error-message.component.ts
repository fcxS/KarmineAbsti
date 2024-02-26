import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  template: '<div data-testId="error-container" >{{message}}</div>',
  styleUrl: './error-message.component.css'
})
export class ErrorMessageComponent {
  @Input() message: string = 'Someting went wrong! Please try again later.';

}
