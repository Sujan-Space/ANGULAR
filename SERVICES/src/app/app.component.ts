import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankService } from './bank.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  balances: number[] = [];

  constructor(private bankService: BankService) {}

  loadBalance() {
    this.balances = this.bankService.getBalance();
  }
}
