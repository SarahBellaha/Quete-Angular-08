import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Onomato-Quoi_Angular08';

  onomatopiaList: Array<string> = [];
  currentOnomatopia: string = "";

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopiaList.push(event);
  }
}
