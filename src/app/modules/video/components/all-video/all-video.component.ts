import { Component, OnInit } from '@angular/core';
import { VideoModel } from '../../../../models/video.model';
import { VideoCategoryModel } from '../../../../models/video-category.model';
import { VideoService } from '../../services/video.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-all-video',
  templateUrl: './all-video.component.html',
  styleUrls: ['./all-video.component.css'],
  providers: [VideoService]
})

export class AllVideoComponent implements OnInit {
  allVideos: VideoModel[] = [];
  _allVideo: VideoModel[] = [];
  pageTitle: string = 'Videos';
  videoCategrioes: VideoCategoryModel[];



  constructor(
    private _videoService: VideoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,

  ) {
    
    this.getCategories();
    this.getAllVideos();

    this._router.events.subscribe(val => {
      let catId: any = this._activatedRoute.snapshot.paramMap.get('id');
      this.filterVideos(catId);
    });
  }
  ngOnInit() {
  }
  private getAllVideos() {

    let catId: any = this._activatedRoute.snapshot.paramMap.get('id');
    this._videoService.getAllVideos().then(vid => {
      if (catId) {
        this._allVideo = vid;
        this.filterVideos(catId);
      } else {
        this.pageTitle = 'Videos';
        this.allVideos = vid;
      }
    });
  }

  private filterVideos(catId) {
    if (this.videoCategrioes && this.videoCategrioes.length > 0 && this._allVideo && this._allVideo.length) {
      let catFound = this.videoCategrioes.find(vcat => vcat.id == catId);
      this.pageTitle = catFound ? catFound.name : 'Videos';
      this.allVideos = this._allVideo.filter(vdo => vdo.categories.find(cat => cat.id == catId));
    }
  }

  private async getCategories() {
    this.videoCategrioes = await this._videoService.getAllCategories();
  }

  public showVideoByCategory(categoryId: string) {
    this._router.navigate(['/video/category', categoryId]);
  }

  /**
   * Navigate to play video page and play a video 
   * @param videoId video id
   */
  public viewVideo(ev: MouseEvent, videoId: string) {
    ev.preventDefault();
    ev.stopPropagation();
    this._router.navigate(['video/play', videoId]);
  }

}
