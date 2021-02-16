import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './application/one/one.component';
import { TwoComponent } from './application/two/two.component';
import { ThreeComponent } from './application/three/three.component';
import { AdHostDirective } from './ad-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    AdHostDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OneComponent, TwoComponent, ThreeComponent],
})
export class AppModule {}
