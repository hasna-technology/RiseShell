import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { PageComponent } from './page/page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: OverviewComponent
    //pathMatch: 'full',
    //redirectTo: "/c/0"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "c/:id",
    component: OverviewComponent
  },
  {
    path: "c/:id/p/:i",
    component: PageComponent
  },
  /*{
    path: "page/:i",
    component: PageComponent
  },*/
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
