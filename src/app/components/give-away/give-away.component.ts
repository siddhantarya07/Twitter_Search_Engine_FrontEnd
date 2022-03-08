import { Component, Input, OnInit } from '@angular/core';
import { GetGiveawaysService } from 'src/app/services/get-giveaways/get-giveaways.service';

@Component({
  selector: 'app-give-away',
  templateUrl: './give-away.component.html',
  styleUrls: ['./give-away.component.css']
})
export class GiveAwayComponent implements OnInit {
  @Input() individualTweet:any;
  selectionType="";

  constructor(
    private getGiveawaysService:GetGiveawaysService
  ) { }

  ngOnInit(): void {
    this.selectionType = this.getGiveawaysService.searchKeyIndex;
  }


}
