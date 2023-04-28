import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDescriptionPage } from './news-description.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDescriptionPageRoutingModule {}
