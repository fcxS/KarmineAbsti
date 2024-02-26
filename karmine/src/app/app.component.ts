import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ErrorMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'karmine';
}
