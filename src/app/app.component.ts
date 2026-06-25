import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from "./parent/parent.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent],
 templateUrl: './app.component.html',
  //For multilines - use backtick , you can embed template inline or in seperate file 
  //  like templateURL
  // template:`<h1>this is html from ts file</h1>
  // <p>para</p>`,
  styleUrl: './app.component.css'
 // standalone: true
  //You can styles like this 
  // styles:[
  //   `h1{ 
  //     padding :10px,
  //     background-color:blue
  //     },
  //     h2{
  //       padding:10px
  //     }`
  //]
})

export class AppComponent {
  title = 'TestParentChildRoutingProject';
}
