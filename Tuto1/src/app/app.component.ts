import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutp';
  name="Jooe"
  getName()
  {
    return this.name
  }
  obj={
    name:'Kelly',
    age:20
  }
  arr=[
    'bruce','tony','peter'
  ]
  siteUrl=window.location.href
  }
