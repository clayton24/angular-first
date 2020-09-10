import { OneComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [OneComponent],
  imports: [BrowserModule],
  bootstrap: [OneComponent],
})
export class MyModule {}
