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
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { RegistroComponent } from './pages/registro/registro.component';
=======
import { RegisterComponent } from './pages/register/register.component';
>>>>>>> 5539668353d8f7969df9c483779da7c547d8c1c0

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
<<<<<<< HEAD
    RegistroComponent
=======
    RegisterComponent,
>>>>>>> 5539668353d8f7969df9c483779da7c547d8c1c0
  ],

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
