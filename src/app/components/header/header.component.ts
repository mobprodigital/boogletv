import { Component, OnInit } from '@angular/core';
import { NavMenu, NavMenuItem } from '../../interfaces/nav-menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public mainNavMenu: NavMenu;
  public showMobMenu: boolean = false;

  constructor() {
    this.feedMenu();
  }

  ngOnInit() {
  }


  public toggleMenu(ev: MouseEvent, navItem: NavMenuItem) {
    ev.preventDefault();
    ev.stopPropagation();
    if (navItem.ChildMenu && navItem.ChildMenu.length > 0) {
      navItem.ChildMenu.forEach((menu: NavMenu) => {
        menu.Hidden = !menu.Hidden;
      });
      console.log(navItem.ChildMenu);
    }
  }

  public toggleMobileMenu(show: boolean) {
    this.showMobMenu = show;
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
          NavItemId: 12,
          Href: '#',
          Text: 'Video',
          ChildMenu: [
            {
              Hidden: true,
              NavId: 121,
              NavName: 'Movies',
              NavItems: [
                {
                  Text: 'Bollywood',
                  Href: '#',
                  NavItemId: 1211
                },
                {
                  Text: 'Hollywood',
                  Href: '#',
                  NavItemId: 1212
                },
              ]
            }
          ]
        }
      ]
    }
  }

}
