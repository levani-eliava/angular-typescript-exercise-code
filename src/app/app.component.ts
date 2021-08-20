import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  toggle: boolean = true;
  
  tonggleCard(){
    this.toggle = !this.toggle
  }

  fruit = ['banani', 'msxali', 'vashli']



}






