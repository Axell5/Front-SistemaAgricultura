import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string = '/dashboard';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    
    // If already logged in, redirect to return URL
    if (this.authService.isAuthenticated()) {
      this.router.navigate([this.returnUrl]);
    }
  }

  onSubmit(): void {
    // Stop if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const { username, password } = this.loginForm.value;
    
    // For demo purposes, accept any login
    // In a real app, this would validate with Keycloak
    setTimeout(() => {
      const mockUser = {
        id: '1',
        username: username,
        name: 'Test User',
        email: `${username}@example.com`,
        role: 'Farmer',
        token: 'mock-jwt-token'
      };
      
      localStorage.setItem('currentUser', JSON.stringify(mockUser));
      this.authService.login(username, password).subscribe({
        next: () => {
          this.notificationService.showSuccess('Login successful');
          this.router.navigate([this.returnUrl]);
        },
        error: (error) => {
          this.notificationService.showError('Login failed');
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    }, 1000);
  }
}