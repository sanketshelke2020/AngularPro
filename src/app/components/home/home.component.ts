import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authSerive : AuthService,private route:RouterService) { }

  ngOnInit(): void {
  }
  Explore(){
    if(this.authSerive.getToken()){
      this.route.goToMenu();
    }
    else this.route.goToLogin();
  }

}
