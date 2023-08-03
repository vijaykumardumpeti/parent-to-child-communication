import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @Output() childProperty:any

  text = "Hello, I am from parent component"
  listOfObjects = [
    {
      id: 1,
      name: "vijay",
      email: "vijay@gmail.com",
    },
    {
      id: 2,
      name: "raju",
      email: "raju@gmail.com",
    },
    {
      id: 3,
      name: "sohel",
      email: "sohel@gmail.com",
    }
  ]

}