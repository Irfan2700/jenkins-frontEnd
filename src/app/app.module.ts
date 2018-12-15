import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SlidePanelComponent } from './components/slide-panel/slide-panel.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatTableModule,
  MatIconModule,
  MatRadioModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatExpansionModule,
  MatTooltipModule,
  MatDialogModule,
  MatChipsModule,
  MatDatepickerModule,
  DateAdapter,
  MatNativeDateModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SlidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
   
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    
    MatIconModule,
    
    MatRadioModule,
    MatProgressBarModule,
    
    MatProgressSpinnerModule,
    
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
  
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
