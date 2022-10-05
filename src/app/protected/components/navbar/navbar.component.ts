import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  // isLoggedIn$!: boolean;
  // isLoggedIn: Observable<boolean> = false;
  isLoggedIn: boolean = false;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.isLoggedIn = this.authService._isLogin;
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      this.isLoggedIn = true;
      console.log("ESTO ES " + localStorage.getItem);
    } else {
      this.isLoggedIn = false;
    }
  }
  logOut() {
    this.router.navigateByUrl('/auth');
    this.authService.logOut();
  }
}
