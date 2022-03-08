import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiveAwayListViewComponent } from './components/give-away-list-view/give-away-list-view.component';
import { HomeComponent } from './components/home/home.component';
import { GiveAwayComponent } from './components/give-away/give-away.component';

import { GetGiveawaysService } from './services/get-giveaways/get-giveaways.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GiveAwayListViewComponent,
    HomeComponent,
    GiveAwayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GetGiveawaysService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
