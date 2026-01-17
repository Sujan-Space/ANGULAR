import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {

  username: string = '';
  password: string = '';

  login() {
    if (this.username === 'sujan' && this.password === 'angular') {
      alert('Login successful! Welcome Sujan');
      } 
      else {
      alert('Invalid username or password');
        }
    this.username=''
    this.password=''

  
  }
}
