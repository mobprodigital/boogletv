import { Component, OnInit } from '@angular/core';
import { Video } from '../../../../models/video.model';
import { VideoCategory } from '../../../../models/video-category.model';
import { VideoService } from '../../services/video.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-all-video',
  templateUrl: './all-video.component.html',
  styleUrls: ['./all-video.component.css'],
  providers: [VideoService]
})
export class AllVideoComponent implements OnInit {
  MostLikedVideos: Video[] = [];

  videoCategrioes: VideoCategory[];

  constructor(
    private _videoService: VideoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    
  ) {
    this.getAllVideos();
    this.getCategories();
    
  }
  ngOnInit() {
    this._activatedRoute.params.forEach((p: Params) => {
      console.log(p)
    });
  }
  private getAllVideos() {
    this._videoService.getAllVideos().then(vid => {
      this.MostLikedVideos = vid;
      console.log(this.MostLikedVideos);
    });


  }

  private async getCategories() {
    this.videoCategrioes = await this._videoService.getAllCategories();
    console.log(this.videoCategrioes);
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
