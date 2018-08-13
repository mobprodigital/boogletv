import { Component, OnInit } from '@angular/core';
import { NavMenu, NavMenuItem } from '../../interfaces/nav-menu.interface';
import { Router } from '@angular/router';
import { VideoService } from '../../modules/video/services/video.service';
import { VideoCategoryModel } from '../../models/video-category.model';
import { VideoModel } from '../../models/video.model';



export type VideoByCategory = {
  name: string;
  id: string;
  videos: VideoModel[]
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [VideoService]
})
export class HeaderComponent implements OnInit {


  videoCategories: VideoCategoryModel[] = [];
  videoList: VideoModel[] = [];
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
