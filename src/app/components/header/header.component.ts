import { Component, OnInit } from '@angular/core';
import { NavMenu, NavMenuItem } from '../../interfaces/nav-menu.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public mainNavMenu: NavMenu;
  public showMobMenu: boolean = false;

  constructor(private router: Router) {
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
    }
    else {
      this.router.navigateByUrl('/' + navItem.Href);
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
          Href: 'home',
          Text: 'Home'
        },
        {
          NavItemId: 12,
          Href: 'video',
          Text: 'Video',
          ChildMenu: [
            {
              Hidden: true,
              NavId: 121,
              NavName: 'Movies',
              NavItems: [
                {
                  Text : 'all',
                  Href : 'video',
                  NavItemId : 1210
                },
                {
                  Text: 'Bollywood',
                  Href: 'video/category',
                  NavItemId: 1211
                },
                {
                  Text: 'Hollywood',
                  Href: 'video/category',
                  NavItemId: 1212
                },
              ]
            }
          ]
        },
        {
          NavItemId : 13,
          Href: '',
          Text: 'Audio'
        },
        {
          NavItemId : 14,
          Href: '',
          Text: 'Text'
        },
        {
          NavItemId : 15,
          Href: '',
          Text: 'Images'
        },
        {
          NavItemId : 16,
          Href: '',
          Text: 'About Us'
        },
        {
          NavItemId : 17,
          Href: '',
          Text: 'Contact Us'
        },
      ]
    }
  }

}
