import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../item.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {
  items: Item[] = [
    { nombre: 'Galaxy A14', descripcion: 'Cambio de pantalla y bateria', estado: 'En reparacion' },
    { nombre: 'iPhone 11', descripcion: 'Reparacion de puerto de carga', estado: 'Listo' },
    { nombre: 'Redmi Note 10', descripcion: 'Desbloqueo FRP y actualizacion de firmware', estado: 'Pendiente' }
  ];

  agregarItem(nombre: string, descripcion: string, estado: string): void {
    if (!nombre.trim() || !descripcion.trim()) {
      return;
    }

    const nuevoItem: Item = {
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      estado: (estado as Item['estado']) || 'Pendiente'
    };
    
    this.items = [...this.items, nuevoItem];
  }
}