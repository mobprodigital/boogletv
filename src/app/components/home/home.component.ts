import { Component, OnInit } from '@angular/core';
import { Video } from "../../models/video.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedSlide: string = '';

  LatestVideos: Video[] = [];
  MostLikedVideos: Video[] = [];
  MostViewedVideos: Video[] = [];
  MostPopulerVideos: Video[] = [];

  constructor() {
    this.feedVideos();
  }

  ngOnInit() {
  }

  public showSlide(VidId: string) {
    this.selectedSlide = VidId;
  }

  /**
   * Temp function
   */
  private feedVideos(): void {
    this.LatestVideos = Array.from({ length: 3 }, (_, i: number) => {

      if (i === 0) {
        this.selectedSlide = 'vid' + i;
      }

      let vdo = new Video();
      vdo.Id = 'vid' + i;
      vdo.Title = 'Video Title ' + i;
      vdo.ViewsCount = 10;
      vdo.LikesCount = 20;
      vdo.CreateDate = new Date();
      vdo.Thumbnails.Orignal = 'assets/images/home/movie' + (i + 1) + '.jpg';
      return vdo;
    })
  }
}
