import { Component, Input, OnInit } from '@angular/core';
import { IonicService } from 'src/app/services/ionic.service';

import textInformation from 'src/assets/news-info/text.json';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss'],
})
export class NewsContentComponent  implements OnInit {
  @Input() newsId: any;

  texts: any = textInformation;
  newsText: any;

  constructor(private ionicService: IonicService) {
  }

  ngOnInit() {
    this.newsText = this.texts.news[this.newsId-1]
    console.log('news texts', this.newsText)
  }

  goPage(page: string) {
    this.ionicService.goPage(page);
  }

}
