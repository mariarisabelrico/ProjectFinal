import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent, HomeComponent,FooterComponent,HeaderComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
