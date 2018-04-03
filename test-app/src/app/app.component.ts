import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cliclou:boolean = false;
  compras:object[] = [
    {titulo:"Livro de Angular"},
    {titulo:"Livro de TypeScript"}
  ];
}
