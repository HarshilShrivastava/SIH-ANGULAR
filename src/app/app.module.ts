import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { MarketingComponent } from './marketing/marketing.component';
import { TechnicalComponent } from './technical/technical.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    QuizComponent,
    NavbarComponent,
    ResultComponent,
    MarketingComponent,
    TechnicalComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PasswordStrengthMeterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
