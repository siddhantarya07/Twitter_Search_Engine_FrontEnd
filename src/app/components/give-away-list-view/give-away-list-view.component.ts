import { HttpResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GetGiveawaysService } from '../../services/get-giveaways/get-giveaways.service'

@Component({
  selector: 'app-give-away-list-view',
  templateUrl: './give-away-list-view.component.html',
  styleUrls: ['./give-away-list-view.component.css']
})
export class GiveAwayListViewComponent implements OnInit {

  sampleData:any;
  tweetListData:any;
  searchResultsCount :any;
  selectionKeyIndex ="";
  resultsSearchedTime ="";
  @ViewChild('loginErrorModal') sample:any;
 
  constructor(
    private getGiveawaysService:GetGiveawaysService,
    private router:Router,) {}

  ngOnInit(): void {
    //User fires a Window reload 
     if(this.getGiveawaysService.searchKeyIndex == null
      && this.getGiveawaysService.searchKeyValue == null){
        this.router.navigate(['./home']);
  }
  this.selectionKeyIndex = this.getGiveawaysService.searchKeyIndex;
  // Get the tweets data
    this.getGiveawaysService.getTweetsBasedOnIndex().subscribe(
       response =>{
        this.tweetListData = response;
        if(this.tweetListData.length >0){
          this.searchResultsCount = this.tweetListData.length;
          this.resultsSearchedTime = this.tweetListData[0].search_time;
         }
        console.log(this.tweetListData);
       } );
  }


}
