import {Component, OnInit} from '@angular/core';
import {DataService} from '../data-service.service';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['../scss/mixin_extend.scss', 'content.component.scss']
})
export class ContentComponent implements OnInit{
  listImage: any[] = [];
  listPeople: any[] = [];
  listItemTable: any[] = [];
  isTrue = false;
  constructor( public dataService: DataService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isTrue = this.dataService.checkIcon;
    this.listImage = this.dataService.listImage;
    this.listPeople = this.dataService.listPeople;
    this.listItemTable = this.dataService.listItemTable;
    this.isTrue = this.dataService.checkIcon;
  }

}
