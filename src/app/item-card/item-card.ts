import { Component, Input, HostBinding } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-card',
  imports: [],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css'
})
export class ItemCard {
  @Input() item!: Item;
  
  @HostBinding('class')
  get hostClasses(): string {
    return `mb-3 d-block border-start border-4 ${this.bordeColor}`;
  }

  get bordeColor(): string {
    switch (this.item?.estado) {
      case 'Listo':
        return 'border-success';
      case 'En reparacion':
        return 'border-warning';
      default:
        return 'border-secondary';
    }
  }

  get badgeColor(): string {
    switch (this.item?.estado) {
      case 'Listo':
        return 'text-bg-success';
      case 'En reparacion':
        return 'text-bg-warning';
      default:
        return 'text-bg-secondary';
    }
  }
}