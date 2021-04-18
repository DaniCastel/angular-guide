import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedOption = 'recipe';

  onNavigate(option: string) {
    this.loadedOption = option;
  }
  title = 'my-first-app';
}
