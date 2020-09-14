import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-start',
  template: '<h1>Angular  Yes Angular! Welcomes you</h1>',
})
class FirstComponent {}

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
class FirstModule {}

platformBrowserDynamic().bootstrapModule(FirstModule);
