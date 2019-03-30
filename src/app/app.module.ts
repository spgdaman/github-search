import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HttpModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileService
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
