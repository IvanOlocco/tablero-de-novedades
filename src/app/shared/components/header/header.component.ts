import { Component, OnInit } from '@angular/core';
import { IonicService } from 'src/app/services/ionic.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(private ionicService: IonicService) { }

  ngOnInit() {}

  public openLink() {
    window.open('https://www.cerveceriaymalteriaquilmes.com/', '_blank');
  }

  goPage(page: string) {
    this.ionicService.goPage(page);
  }

}
