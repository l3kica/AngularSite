import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatBadgeModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Cool-site';
  listoforders: string[] = []
  hidden = false;
  basketOpen: boolean = false
  addToList(value: string)
  {
    this.listoforders.push(value)
    console.log(this.listoforders.length)
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  toggleBasket(){
    this.basketOpen = !this.basketOpen
  }

  scrollUp(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
}
  ngOnInit()
  {
    AOS.init();
  }

}
