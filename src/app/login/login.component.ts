import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService) { }
  user: SocialUser
  loggedIn: boolean;


  signinWithFb(): void {

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signwithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }
  signinout(){


    this.authService.signOut();
  }
  ngOnInit(): void {


    this.authService.authState.subscribe((user) => {


      this.user = user;
      this.loggedIn = (user != null)

    })
  }

}
