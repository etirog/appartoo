import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'AppartooFront :)';


    logout() {
        sessionStorage.setItem('idUser', "")
        document.location.href = "http://localhost:4200/login";
    }




}
