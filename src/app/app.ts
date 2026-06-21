import { Component } from '@angular/core';
import { ItemList } from './item-list/item-list';

@Component({
  selector: 'app-root',
  imports: [ItemList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Sistema de Gestion de Reparaciones';
}
