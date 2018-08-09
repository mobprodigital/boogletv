import { Component, OnInit } from '@angular/core';
import { NavMenu, NavMenuItem } from '../../interfaces/nav-menu.interface';
import { Router } from '@angular/router';
import { VideoService } from '../../modules/video/services/video.service';
import { VideoCategory } from '../../models/video-category.model';
import { Video } from '../../models/video.model';



export type VideoByCategory = {
  name: string;
  id: string;
  videos: Video[]
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [VideoService]
})
export class HeaderComponent implements OnInit {


  mainNavMenu: NavMenu;
  videoCategories: VideoCategory[] = [];
  videoList: Video[] = [];
  videoListByCategory: VideoByCategory[] = [];

  viewMenu: boolean = false;

  constructor(private router: Router, private _videoService: VideoService) {
    this.getVideoData();
  }

  ngOnInit() {
    this.viewMenu = window.outerWidth > 992;
  }

  public getVideoData() {
    Promise.all([this._videoService.getAllVideos(), this._videoService.getAllCategories()]).then(
      ([videos, categories]) => {
        this.videoCategories = categories;
        this.videoListByCategory = categories.map(cat => ({
          id: cat.id,
          name: cat.name,
          videos: videos.filter(vid => vid.categories.find(c => c.id == cat.id))
        })
        );
      }
    );
  }

  public toggleMobileSubMenu(ev: MouseEvent) {
    ev.preventDefault();
    ev.stopPropagation();

    let targetElement = <HTMLElement>ev.target;
    targetElement.parentElement.nextElementSibling.classList.toggle('mob-menu-hidden');
  }
}
