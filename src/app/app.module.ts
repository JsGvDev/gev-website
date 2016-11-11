import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { GetStartComponent } from './get-start/get-start.component';
import { ProductsComponent } from './products/products.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { EditComponent } from './edit/edit.component';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth }           from './auth.service';
import { LocalStore } from './localstore.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    GetStartComponent,
    ProductsComponent,
    SocialMediaComponent,
    AboutUsComponent,
    HeaderComponent,
    MenuComponent,
    EditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AUTH_PROVIDERS,
    Auth,
    LocalStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
