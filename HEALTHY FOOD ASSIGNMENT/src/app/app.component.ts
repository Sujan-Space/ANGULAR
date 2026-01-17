import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  foodInput: string = '';

  healthyFoods: string[] = [
    'Fruits',
    'Vegetables',
    'Whole Grains',
    'Nuts',
    'Salads',
  ];

  addFood() {
    if (this.foodInput.trim() !== '') {
      this.healthyFoods.push(this.foodInput.trim());
      this.foodInput = '';
    }
  }
}
