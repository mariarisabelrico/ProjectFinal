import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { RegistroComponent } from './pages/registro/registro.component';
=======
import { RegisterComponent } from './pages/register/register.component';
>>>>>>> 5539668353d8f7969df9c483779da7c547d8c1c0

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Registro',component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
