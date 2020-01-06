import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [{
  path:"",
  component:OverviewComponent
},{
  path:"page/:i",
  component:PageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
