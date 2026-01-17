import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

enum FoodType {
  UNKNOWN = 0,
  NON_VEG = 1,
  VEG = 2,
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  foodInput: string = '';

  addFood() {
    const food = this.foodInput.trim().toLowerCase();
    let foodType: FoodType = FoodType.UNKNOWN;

    if (!food) {
      alert('Please enter a food item');
      return;
    }

    if (['egg', 'chicken', 'prawn'].includes(food)) {
      foodType = FoodType.NON_VEG;
    } else if (['fruits', 'milk', 'curd', 'veggies'].includes(food)) {
      foodType = FoodType.VEG;
    }

    switch (foodType) {
      case FoodType.NON_VEG:
        alert('You have ordered non veg food');
        break;

      case FoodType.VEG:
        alert('You have ordered veg food');
        break;

      default:
        alert('Food item not recognized');
        break;
    }

    this.foodInput = '';
  }
}
