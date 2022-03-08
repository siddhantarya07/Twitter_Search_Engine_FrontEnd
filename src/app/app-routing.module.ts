import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { GiveAwayComponent } from './components/give-away/give-away.component'
import { GiveAwayListViewComponent } from './components/give-away-list-view/give-away-list-view.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'giveAway', component: GiveAwayComponent },
  { path: 'giveAwayList', component: GiveAwayListViewComponent },
  { path: '',redirectTo:'/home',pathMatch:'full'},
  { path: '**', component:HomeComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
