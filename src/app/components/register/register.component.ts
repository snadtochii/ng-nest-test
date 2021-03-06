import { Component, OnInit } from '@angular/core';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;


  constructor(
    private validateService: ValidateService,
    // private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };

    // Require fields
    if (!this.validateService.validateRegister(user)) {
      // this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 })
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      // this.flashMessagesService.show('Please use the valid email', { cssClass: 'alert-danger', timeout: 3000 })
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        // this.flashMessagesService.show('You are now registered and can login', { cssClass: 'alert-success', timeout: 3000 })
        this.router.navigate(['/login']);
      } else {
        // this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 })
        this.router.navigate(['/register']);
      }
    });
  }
}
