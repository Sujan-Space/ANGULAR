import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyServices } from './policy.service';
import { Policy } from './policy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
})
export class AppComponent {

  policies$!: Observable<Policy[]>;

  constructor(private policyService: PolicyServices) {
    this.policies$ = this.policyService.getPolicies();
  }
}
