import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../../services/video/video.service';
import { CategoryModel } from '../../models/category.model';
import { VideoModel } from '../../models/video.model';
import { CategoryService } from '../../services/categories/categories.service';
import { NavItemModel } from '../../models/nav-item.model';



export type VideoByCategory = {
  name: string;
  id: string;
  videos: VideoModel[]
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [VideoService, CategoryService]
})
export class HeaderComponent implements OnInit {


  videoCategories: CategoryModel[] = [];
  videoList: VideoModel[] = [];
  videoListByCategory: VideoByCategory[] = [];
  mainMenu: NavItemModel[] = [];
  viewMenu: boolean = false;

  constructor(private router: Router, private _videoService: VideoService, private _categoryService: CategoryService) {
    this.createNavMenu();
  }

  ngOnInit() {
    this.viewMenu = window.outerWidth > 992;

  }

  private createNavMenu() {

    this._categoryService.getRootCategories().then(async catArr => {
      if (catArr.length > 0) {
        try {
          let rootCatArr = await Promise.all(catArr.map(async (cat) => {
            let _subNavMenu = new NavItemModel(cat.id, cat.name, cat.name.toLowerCase());

            //set as mega menu for video category
            _subNavMenu.megaMenu = cat.id == '2';

            let subCat = await this._categoryService.getSubCategoriesById(parseInt(cat.id), 0, 4);


            if (subCat.length > 0) {
              _subNavMenu.navItems = await Promise.all(subCat.map(async (subCatItem) => {
                try {
                  let subCatVideo: VideoModel[] = await this._videoService.getVideoByCategoryId([parseInt(subCatItem.id)], 0, 3);

                  if (_subNavMenu.megaMenu) {
                    let megaMenuItem: NavItemModel = new NavItemModel(
                      subCatItem.id,
                      subCatItem.name,
                      cat.name + '/category/' + subCatItem.id
                    );
                    megaMenuItem.megaMenuData = subCatVideo;
                    return megaMenuItem;
                  }
                  else {
                    let megaMenuItem: NavItemModel = new NavItemModel(
                      subCatItem.id,
                      subCatItem.name,
                      cat.name + '/category/' + subCatItem.id
                    );
                    megaMenuItem.megaMenuData = subCatVideo;
                    return megaMenuItem;
                  }
                }
                catch (err) {
                  alert('err in code '+ err);
                }
              }));

            }
            return _subNavMenu;
          }));
          this.mainMenu.push(...rootCatArr);
          
        }
        catch (err) {
          alert('Err in code : ' + err);
        }
      };

      this.mainMenu.push(new NavItemModel('nav3', 'About Us', '/about-us'));
      this.mainMenu.push(new NavItemModel('nav4', 'Contact Us', '/contact-us'));
      console.log(this.mainMenu);
    });
  }




  /**
   * Navigate to play video page and play a video 
   * @param videoId video id
   */
  public viewVideo(ev: MouseEvent, videoId: string) {
    ev.preventDefault();
    ev.stopPropagation();
    this.router.navigate(['video/play', videoId]);
  }
}
