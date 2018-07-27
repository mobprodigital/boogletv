import { Component, OnInit } from '@angular/core';
import { NavMenu } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public mainNavMenu: NavMenu;

  constructor() {
    this.feedMenu();
   }

  ngOnInit() {
  }

  private feedMenu() {
    this.mainNavMenu = {
      NavId: 1,
      NavName: 'Main nenu',
      NavItems: [
        {
          NavItemId: 11,
          Href: '#',
          Text: 'Home'
        },
        {
          NavItemId : 12,
          Href : '#',
          Text : 'Video',
          ChildMenu : [
            {
              NavId : 121,
              NavName : 'Movies',
              NavItems : [
                {
                  Text : 'Bollywood',
                  Href : '#',
                  NavItemId : 1211
                },
                {
                  Text : 'Hollywood',
                  Href : '#',
                  NavItemId : 1212
                },
              ]
            }
          ]
        }
      ]
    }
  }

}
