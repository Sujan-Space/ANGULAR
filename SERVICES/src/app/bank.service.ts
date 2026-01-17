import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor() {}

  getBalance() {
    return [5000, -2500, 12000];
  }
}
