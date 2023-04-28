import { Component, OnInit } from '@angular/core';
import { IonicService } from 'src/app/services/ionic.service';

import textInformation from 'src/assets/news-info/text.json';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss'],
})
export class NewsContentComponent  implements OnInit {

  texts: any = textInformation;

  constructor(private ionicService: IonicService,) {
  }

  ngOnInit() {
    console.log('texts', this.texts)
  }

  goPage(page: string) {
    this.ionicService.goPage(page);
  }

}
