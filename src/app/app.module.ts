import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
  ],

  providers: [
    {
      provide:'SocialAuthServiceConfig',
      useValue:{
        autoLogin:false,
        providers:[
          {
            id:FacebookLoginProvider.PROVIDER_ID,
            provider:new FacebookLoginProvider('1953004328166658')
          },
          {
            id:GoogleLoginProvider.PROVIDER_ID,
            provider:new GoogleLoginProvider('957804172312-21akjharehnvleu2h2m3p0re379sqfqb.apps.googleusercontent.com')
          }
          
        ]
      }as SocialAuthServiceConfig, //data api inject ->
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
