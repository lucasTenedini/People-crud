import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './features/menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SingInComponent } from './features/sing-in/sing-in.component';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/services/login/login.service';
import { AuthGuardService } from './core/auth-guard.service';
import { RequestInterceptor } from './core/request.interceptor';
import { TestComponent } from './features/test/test.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SingInComponent,
    HomeComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    LoginService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
