import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Order } from './order';


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
  profileOpen: boolean = false
  profileLoggedIn: boolean = false
  accountName: string = ""
  messageOpen: boolean = false
  messageFull: string = ""
  public theorder: Order = new Order("", 0, "", new Date());

  LogIn(value:string)
  {
    this.accountName = value;
    this.profileLoggedIn = true
  }

  LogOut()
  {
    this.accountName = ""
    this.profileLoggedIn = false
  }

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
    this.profileOpen = false
    this.messageOpen = false
  }

  toggleProfile()
  {
    this.profileOpen = !this.profileOpen
    this.basketOpen = false
    this.messageOpen = false
  }

  toggleMessage()
  {
    this.messageOpen = !this.messageOpen
    this.basketOpen = false
    this.profileOpen = false
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

  emptyBasket()
  {
    this.listoforders = [];
  }

  removeOrder(index: number)
  {
    this.listoforders.splice(index, 1)
  }

  saveOrder(fullMessage: string, numberOfItems: number, nameOfAccount: string)
  {
    this.theorder = new Order(fullMessage,numberOfItems,nameOfAccount, new Date())
  }
}


