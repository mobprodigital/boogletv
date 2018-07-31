import { Component, OnInit } from '@angular/core';
import { Video } from '../../../../models/video.model';

@Component({
  selector: 'app-all-video',
  templateUrl: './all-video.component.html',
  styleUrls: ['./all-video.component.css']
})
export class AllVideoComponent implements OnInit {
  MostLikedVideos: Video[] = [];

  constructor() {
    this.feedVideos();
  }
  ngOnInit() {
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
}
