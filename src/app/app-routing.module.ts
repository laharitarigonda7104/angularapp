import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ScoreComponent } from './score/score.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PlacementComponent } from './placement/placement.component';

const routes: Routes = [
  {path:'courses',component:CoursesComponent},
  {path:'score',component:ScoreComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'placement',component:PlacementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
