import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GetGiveawaysService } from '../../services/get-giveaways/get-giveaways.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchBox:any
  selectionValue:any;
  constructor(
    private router:Router,
    private getGiveawaysService:GetGiveawaysService) { }

  ngOnInit(): void {
  }
  loadGiveAwayLists(){
    console.log(this.searchBox);
    console.log(this.selectionValue);
    if(this.searchBox == null || this.selectionValue == null){
      alert("Please enter all the required fields!")
    }
    else{
      this.getGiveawaysService.searchKeyIndex = this.selectionValue;
      this.getGiveawaysService.searchKeyValue = this.searchBox;
      this.router.navigate(['./giveAwayList']);
    }
  }
}
