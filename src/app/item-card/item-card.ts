import { Component, Input, HostBinding } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-card',
  imports: [],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {
  // Recibe el objeto Item desde el componente padre (el listado)
  @Input() item!: Item;

  // @HostBinding enlaza una propiedad del elemento HOST (el <app-item-card> en si)
  // En este caso le agregamos la clase "mb-3" de Bootstrap directamente al host,
  // para que cada tarjeta tenga separacion inferior sin tener que envolverla en un div extra.
  @HostBinding('class') hostClasses = 'mb-3 d-block';
}
