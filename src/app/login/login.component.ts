import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  toke: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('value', response.token);
        this.loginService.validate().subscribe(
          (isValid: boolean) => {
            if (isValid) {
              this.loginService.isLoggedIn=true;
              this.router.navigate(['/item']);
              
            } else {
              alert('Invalid token');
              this.loginService.isLoggedIn=false;
              
            }
          },
          (error: any) => {
            console.error('Token validation error:', error);
          }
        );
      },
      (error: any) => {
        alert('Invalid credentials');
        console.error('Login error:', error);
      }
    );
  }
 
  
}
