import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_slckthsz.json'
  }

  options02: AnimationOptions = {
    path: 'https://assets9.lottiefiles.com/packages/lf20_djntqslv.json'
  }

  options03: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/packages/lf20_3qh85mab.json'
  }

  options04: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_ns1snx0q.json'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
