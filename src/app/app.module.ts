import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


import { AppComponent } from './app.component';
import { ScannerComponent } from './components/scanner/scanner.component';


@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent
  ],
  imports: [
    BrowserModule,
    ZXingScannerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
