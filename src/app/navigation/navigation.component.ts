import {Component, OnChanges, OnInit} from '@angular/core';
import {DataService} from '../data-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnChanges{
  menuText: string[] = ['home', 'showcase', 'services', 'designers', 'packages', 'contact'];
  displayNav = '';
  widthNav = '';
  closeTextMenu = '';
constructor(public dataService: DataService) {
}
  openMenu(){
    this.displayNav = 'block';
    this.widthNav = '300px';
    this.closeTextMenu = 'block';
    this.dataService.checkIcon = true;
  }
  // tslint:disable-next-line:typedef
  closeMenu(){
    this.closeTextMenu = 'none';
  }
  ngOnInit() {
  console.log(this.dataService.checkIcon);
  }
  ngOnChanges() {
    console.log(this.dataService.checkIcon);
  }
}
