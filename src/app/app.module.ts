import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store } from './shared/store';

import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
    declarations: [AppComponent],
    imports: [HttpClientModule, BrowserModule, AppRoutingModule, InlineSVGModule.forRoot()],
    providers: [Store],
    bootstrap: [AppComponent],
})
export class AppModule {}
