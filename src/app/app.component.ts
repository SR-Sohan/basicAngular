import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hello World';
  email = "sr.sohanur22@gmail.com";

  blogs: any;

  constructor(service: BlogService){
    this.blogs = service.getBlog();
  }

  handleClick(){
    console.log(this.email);
    
  }

}
