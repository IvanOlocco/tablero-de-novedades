import { Component, OnInit } from '@angular/core';
import { IonicService } from 'src/app/services/ionic.service';

import textInformation from 'src/assets/news-info/text.json';

export interface newsButtonContent {
  title: string;
  text: string;
  imgSrc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  public newsButton: newsButtonContent[] = [];
  texts: any = textInformation.news;

  constructor(private ionicService: IonicService,) {}

  ngOnInit() {
    console.log('home texts', this.texts)
    this.newsButton = this.texts;
  }

  goPage(page: string) {
    this.ionicService.goPage(page);
  }

}
