import { Injectable } from '@angular/core';
import { AjaxService } from '../../../services/ajax/ajax.service';
import { VideoCategory } from '../../../models/video-category.model';


@Injectable()
export class VideoService {

  constructor(private _ajaxService: AjaxService) { }

  public getAllCategories(): Promise<VideoCategory> {

    let videoCategoryList: VideoCategory = new VideoCategory();
    videoCategoryList.Id = 'vid1';
    videoCategoryList.Name = 'Video';

    let moviesCat = new VideoCategory();
    moviesCat.Id = 'vid2';
    moviesCat.Name = 'Movies';

    let bollywoodCat = new VideoCategory();
    bollywoodCat.Id = 'vid3';
    bollywoodCat.Name = 'Bollywood';

    let hollywoodCat = new VideoCategory();
    hollywoodCat.Id = 'vid4';
    hollywoodCat.Name = 'Movies';

    moviesCat.Categories = [
      bollywoodCat, hollywoodCat
    ];

    videoCategoryList.Categories = [moviesCat];

    return new Promise((resolve, reject) => {
      resolve(videoCategoryList);
    })

  }

  public getAllVideos() {

  }

}
