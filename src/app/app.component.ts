import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2PF-Pinkala';


  constructor(
    private router: Router
  ){

  } 

  redigirInicio(){
    this.router.navigate(['inicio']);
  }
}
