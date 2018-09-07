import { Injectable } from '@angular/core';
import { AjaxService } from '../../../services/ajax/ajax.service';
import { VideoCategoryModel } from '../../../models/video-category.model';
import { VideoModel } from '../../../models/video.model';
import { VideoSource } from '../../../enums/videosource.enum';


@Injectable()
export class VideoService {

  constructor(private _ajaxService: AjaxService) {
    this.feedTempVideo();
  }


  private videoList: VideoModel[] = [];

  /**
   * Get all video categories
   */
  public getAllCategories(): Promise<VideoCategoryModel[]> {
    let videoCategoryList: VideoCategoryModel[] = [
      new VideoCategoryModel('Bollywood gossip', 'vc1'),
      new VideoCategoryModel('Comedy', 'vc2'),
      new VideoCategoryModel('Food', 'vc3'),
      new VideoCategoryModel('Kids', 'vc4'),
      new VideoCategoryModel('Travel', 'vc5'),
    ];


    return new Promise((resolve, reject) => {
      resolve(videoCategoryList);
    })

  }

  public getAllVideos(): Promise<VideoModel[]> {
    return Promise.resolve(this.videoList);
  }

  public getVideoById(videoId: string): Promise<VideoModel> {
    return new Promise((resolve, reject) => {
      let videoFound = this.videoList.find(vid => vid.id == videoId);
      if (videoFound) {
        resolve(videoFound);
      }
      else {
        reject('video not found');
      }

    })
  }

  private feedTempVideo() {
    //#region movies

    let _vdo1 = new VideoModel();
    _vdo1.id = 'vid_bg_1';
    _vdo1.title = 'Dilip Kumar Admitted To Lilavati Hospital, Suffering From Aspiration Pneumonia';
    _vdo1.likesCount = 120;
    _vdo1.dislikesCount = 12;
    _vdo1.duration = '00:01:31';
    _vdo1.viewsCount = 1351;
    _vdo1.videoSource = VideoSource.File;
    _vdo1.src = 'assets/videodata/bollywood_gossip/Dilip Kumar Admitted To Lilavati Hospital, Suffering From Aspiration Pneumonia &Age-Related Problems.mp4';
    _vdo1.categories = [
      new VideoCategoryModel('Bollywood gossip', 'vc1')
    ];




    //#endregion 



    this.videoList = [_vdo1];
  }


  public getAdVideos() {

  }

}
