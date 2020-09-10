import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UnoComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { BannerOneComponent } from './layout/banner-one/banner-one.component';
import { ProductsComponent } from './layout/products/products.component';
import { BannerTwoComponent } from './layout/banner-two/banner-two.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { BannerThreeComponent } from './layout/banner-three/banner-three.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BooksComponent } from './products/books/books.component';
import { BikesComponent } from './products/bikes/bikes.component';
import { PhonesComponent } from './products/phones/phones.component';

@NgModule({
  declarations: [
    UnoComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    BooksComponent,
    BikesComponent,
    PhonesComponent,
  ],
  imports: [BrowserModule],
  bootstrap: [UnoComponent],
})
export class UnoModule {}
