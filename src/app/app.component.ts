import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cool-site';
  listoforders: string[] = []
  

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
