import { Component, OnInit } from '@angular/core';
import { Video } from '../../../../models/video.model';
import { VideoCategory } from '../../../../models/video-category.model';
import { VideoService } from '../../services/video.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-all-video',
  templateUrl: './all-video.component.html',
  styleUrls: ['./all-video.component.css'],
  providers: [VideoService]
})
export class AllVideoComponent implements OnInit {
  MostLikedVideos: Video[] = [];

  videoCategrioes: VideoCategory;

  constructor(
    private _videoService: VideoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,

  ) {
    this.feedVideos();
    this.getCategories();
  }
  ngOnInit() {
    this._activatedRoute.params.forEach((p: Params) => {
      console.log(p)
    });
  }
  private feedVideos() {
    this.MostLikedVideos = Array.from({ length: 12 }, (_, i: number) => {

      let vdo = new Video();
      vdo.Id = 'vid' + i;
      vdo.Title = 'Video Title ' + i;
      vdo.ViewsCount = i * 10;
      vdo.LikesCount = i * 20;
      vdo.CreateDate = new Date();
      vdo.Thumbnails.Orignal = `assets/images/home/movie${(Math.floor(Math.random() * (1 - 3)) + 3)}.jpg`;
      return vdo;
    })
  }

  private async getCategories() {
    this.videoCategrioes = await this._videoService.getAllCategories();
    console.log(this.videoCategrioes);
  }

  public showVideoByCategory(categoryId: string) {
    this._router.navigate(['/video/category', categoryId]);
  }

}
