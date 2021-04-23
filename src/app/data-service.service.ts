import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
  constructor() { }
  listImage = [
    { nameClass: 'img fisrt ',  name: 'https://www.w3schools.com/w3images/kitchenconcrete.jpg'},
    { nameClass: 'img second',  name: 'https://www.w3schools.com/w3images/atrium.jpg'},
    { nameClass: 'img third',  name: 'https://www.w3schools.com/w3images/livingroom.jpg'},
    { nameClass: 'img four',  name: 'https://www.w3schools.com/w3images/bedroom.jpg'},
    { nameClass: 'img fifth',  name: 'https://www.w3schools.com/w3images/diningroom.jpg'},
    { nameClass: 'img six',  name: 'https://www.w3schools.com/w3images/livingroom2.jpg'},
  ];
  listPeople = [
    {img: 'https://www.w3schools.com/w3images/team2.jpg', namePeople: 'John Doe', nameJob: 'CEO & Founder', context: 'hasellus eget enim eu '
        + 'lectus faucibus vestibulum. Suspendisse sodales pellentesque\n elementum.'},
    {img: 'https://www.w3schools.com/w3images/team1.jpg', namePeople: 'Jane Doe', nameJob: 'Designer', context: 'hasellus eget enim eu '
        + 'lectus faucibus vestibulum. Suspendisse sodales pellentesque\n elementum.'},
    {img: 'https://www.w3schools.com/w3images/team3.jpg', namePeople: 'Mike Ross', nameJob: 'Architect', context: 'hasellus eget enim eu '
        + 'lectus faucibus vestibulum. Suspendisse sodales pellentesque\n elementum.'},
  ];
  listItemTable = [
    {className: 'tableLeft', titleTable: 'Basic', item1: 'Floorplanning', item2: '10 hours support', item3: 'Photography',
      item4: '20% furniture discount', item5: 'Good deals', item6: '$ 199'},
    {className: 'tableRight', titleTable: 'Pro', item1: 'Floorplanning', item2: '50 hours support', item3: 'Photography',
      item4: '50% furniture discount', item5: 'GREAT deals', item6: '$ 249'}
  ];
  checkIcon = false;
  // tslint:disable-next-line:typedef
  addNew( va: boolean){
    this.checkIcon = va;
  }
  getValueBoolean(){
   return this.checkIcon;
  }
  ngOnInit() {
    console.log(this.checkIcon);
  }

}
