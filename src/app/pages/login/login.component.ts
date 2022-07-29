import { Component, OnInit } from '@angular/core';

import { ResponseI } from '../../shared/models/response.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
<<<<<<< HEAD
    password: ''
  }
=======
    password: '',
    
  };
>>>>>>> c59bf376daf4e826afa32b4b9539761b5bcb68ac

  constructor(
    private api: ApiService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onLogin() {
    console.log(this.login);
    this.api.sinsin(this.login).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('token', res);
<<<<<<< HEAD
      this.router.navigate(['Registro']);
=======
      this.router.navigate(['HomeUser']);
>>>>>>> c59bf376daf4e826afa32b4b9539761b5bcb68ac
    });
  }
}
