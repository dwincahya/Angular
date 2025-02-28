import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn = false;  

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/login']);  
  }

  logout() {
    this.isLoggedIn = false;
  }

  profile() {
  }
}
