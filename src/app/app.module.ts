import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { CareerPageComponent } from './pages/career-page/career-page.component';
import { RoadmapPageComponent } from './pages/roadmap-page/roadmap-page.component';
import { CareerCreateComponent } from './admin-manager/career-create/career-create.component';
import { CareerListComponent } from './admin-manager/career-list/career-list.component';
import { CareerCreateService } from './admin-manager/career-create/career-create.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CareerPageComponent,
    RoadmapPageComponent,
    CareerCreateComponent,
    CareerListComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  exports: [
    CareerCreateComponent,
    CareerListComponent
  ],
  providers: [CareerCreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
