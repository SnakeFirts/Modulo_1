import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../item.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-item-list',
  // CommonModule habilita *ngFor y *ngIf.
  // FormsModule habilita ngForm y ngSubmit en el formulario.
  // ItemCard es el componente hijo que renderiza cada tarjeta.
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {

  // Array de objetos Item que se muestra en la plantilla (requisito 5)
  items: Item[] = [
    { nombre: 'Galaxy A14', descripcion: 'Cambio de pantalla y bateria' },
    { nombre: 'iPhone 11', descripcion: 'Reparacion de puerto de carga' },
    { nombre: 'Redmi Note 10', descripcion: 'Desbloqueo FRP y actualizacion de firmware' }
  ];

  // Esta funcion se invoca desde el formulario al hacer click en "Agregar".
  // Recibe los valores leidos desde las variables de plantilla (#nombre, #descripcion)
  agregarItem(nombre: string, descripcion: string): void {
    // Evitamos agregar items vacios
    if (!nombre.trim() || !descripcion.trim()) {
      return;
    }

    // Creamos el nuevo objeto Item tipado
    const nuevoItem: Item = {
      nombre: nombre.trim(),
      descripcion: descripcion.trim()
    };

    // Reemplazamos el array por uno nuevo (incluyendo el nuevo item al final).
    // Angular detecta el cambio de referencia del array y actualiza la vista
    // de forma reactiva gracias al *ngFor que esta enlazado a "items".
    this.items = [...this.items, nuevoItem];
  }
}
