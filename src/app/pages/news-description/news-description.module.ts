import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDescriptionPageRoutingModule } from './news-description-routing.module';

import { NewsDescriptionPage } from './news-description.page';
import { SharedModule } from 'src/app/shared/shared-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NewsDescriptionPageRoutingModule
  ],
  declarations: [NewsDescriptionPage]
})
export class NewsDescriptionPageModule {}
