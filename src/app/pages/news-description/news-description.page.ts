import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-description',
  templateUrl: './news-description.page.html',
  styleUrls: ['./news-description.page.scss'],
})
export class NewsDescriptionPage implements OnInit {
  public newsId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.newsId = this.route.snapshot.paramMap.get('i');
  }

}
