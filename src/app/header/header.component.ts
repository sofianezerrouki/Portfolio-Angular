import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  sayHello(){
    this.router.navigateByUrl('contactme');
  }
  aboutMe(){
    this.router.navigateByUrl('details');
    
  }
  projects(){
    this.router.navigateByUrl('contactme');
    
  }
  blog(){
    this.router.navigateByUrl('contactme');

  }

}
