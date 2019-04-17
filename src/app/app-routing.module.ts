import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryComponent} from './history/history.component';
import {PlayComponent} from './play/play.component';
import { VideoCarouselComponent } from './video-carousel/video-carousel.component';

const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'play/:play', component: PlayComponent },
  { path: 'carousel', component: VideoCarouselComponent },
  { path: '', redirectTo: 'carousel', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
