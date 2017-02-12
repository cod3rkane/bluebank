import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountInputComponent } from './components/account-input/account-input.component';

import { TransferService } from './services/transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
