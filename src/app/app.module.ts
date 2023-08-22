import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StorePageComponent } from './components/store-page/store-page.component';
import { StoreItemComponent } from './components/store-item/store-item.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AddStoreFormComponent } from './components/add-store-form/add-store-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    StorePageComponent,
    StoreItemComponent,
    ProductItemComponent,
    ProductPageComponent,
    ErrorPageComponent,
    AddStoreFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
