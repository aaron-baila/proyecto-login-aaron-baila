import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-aaron-baila';

  constructor(private router: Router) {
  }
  goToUsers() {
    this.router.navigate(['/menu/users']);
  }
  goToMenu() {
    this.router.navigate(['/menu']);
  }

  isLoginPage(): boolean {
    return window.location.href.includes("auth");
  }
}
