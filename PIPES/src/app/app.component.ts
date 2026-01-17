import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycurrencyPipe } from './mycurrency.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MycurrencyPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  balances: number[] = [1000, 2500.75, 50000, 123456.89];
}
