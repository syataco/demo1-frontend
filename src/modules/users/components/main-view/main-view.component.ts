import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  
  navListItems = [
    { 
      id: 1,
      name: "Home",
      icon: "home",
      route: "./home",
      isSelected: false
    },
    { 
      id: 2,
      name: "Branches",
      icon: "home",
      route: "./branches",
      isSelected: false
    },
    {
      id: 3,
      name: "Users",
      icon: "menu_book",
      route: "./users",
      isSelected: false
    },
    {
      id: 4,
      name: "Products",
      icon: "settings",
      route: "./products",
      isSelected: false
    }
  ];
  
  isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.firstSelected(this.navListItems);
  }

   collapse(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  selected(item: any): void {
    this.navListItems.forEach(e => {
      if (item.id === e.id) {
        e.isSelected = true;
      } else {
        e.isSelected = false;
      }
    });
  }

  firstSelected(item: any) {
    item[0].isSelected = true;
  }
}
