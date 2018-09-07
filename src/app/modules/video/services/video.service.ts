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
    //#region bollywood gossip

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

    let _vdo2 = new VideoModel();
    _vdo2.id = 'vid_bg_2';
    _vdo2.title = 'Karan Johar Warns Don’t Go Anywhere In Bandra';
    _vdo2.likesCount = 154;
    _vdo2.dislikesCount = 44;
    _vdo2.duration = '00:01:27';
    _vdo2.viewsCount = 488;
    _vdo2.videoSource = VideoSource.File;
    _vdo2.src = 'assets/videodata/bollywood_gossip/Karan Johar Warns Don’t Go Anywhere In Bandra If You Want To Keep Your Love Life Private!.mp4';
    _vdo2.categories = [
      new VideoCategoryModel('Bollywood gossip', 'vc1')
    ];
    
    let _vdo3 = new VideoModel();
    _vdo3.id = 'vid_bg_3';
    _vdo3.title = 'Sonali Bendre Opts For A Wig';
    _vdo3.likesCount = 1255;
    _vdo3.dislikesCount = 164;
    _vdo3.duration = '00:02:37';
    _vdo3.viewsCount = 14455;
    _vdo3.videoSource = VideoSource.File;
    _vdo3.src = 'assets/videodata/bollywood_gossip/Sonali Bendre Opts For A Wig; Thanks Priyanka Chopra For It.mp4';
    _vdo3.categories = [
      new VideoCategoryModel('Bollywood gossip', 'vc1')
    ];
    
    let _vdo4 = new VideoModel();
    _vdo4.id = 'vid_bg_4';
    _vdo4.title = 'SPOTBOYE SPOT SHOTS';
    _vdo4.likesCount = 5024;
    _vdo4.dislikesCount = 12;
    _vdo4.duration = '00:00:35';
    _vdo4.viewsCount = 14525;
    _vdo4.videoSource = VideoSource.File;
    _vdo4.src = 'assets/videodata/bollywood_gossip/SPOTBOYE SPOT SHOTS.mp4';
    _vdo4.categories = [
      new VideoCategoryModel('Bollywood gossip', 'vc1')
    ];

    let _vdo5 = new VideoModel();
    _vdo5.id = 'vid_bg_5';
    _vdo5.title = `Super 30 Posters Released On Teacher's`;
    _vdo5.likesCount = 1469;
    _vdo5.dislikesCount = 215;
    _vdo5.duration = '00:01:26';
    _vdo5.viewsCount = 13245;
    _vdo5.videoSource = VideoSource.File;
    _vdo5.src = `assets/videodata/bollywood_gossip/Super 30 Posters Released On Teacher's Day Hrithik Roshan Sends Out A Strong Message.mp4`;
    _vdo5.categories = [
      new VideoCategoryModel('Bollywood gossip', 'vc1')
    ];

    //#endregion 

    //#region comedy
    let _vdo6 = new VideoModel();
    _vdo6.id = 'vid_cm_6';
    _vdo6.title = `Brother Sister blueberry fight`;
    _vdo6.likesCount = 1254;
    _vdo6.dislikesCount = 145;
    _vdo6.duration = '00:00:27';
    _vdo6.viewsCount = 15624;
    _vdo6.videoSource = VideoSource.File;
    _vdo6.src = `assets/videodata/comedy/Brother Sister blueberry fight.mp4`;
    _vdo6.categories = [
      new VideoCategoryModel('Comedy', 'vc2')
    ];

    let _vdo7 = new VideoModel();
    _vdo7.id = 'vid_cm_7';
    _vdo7.title = `Cat Funny Viral Videos`;
    _vdo7.likesCount = 12411;
    _vdo7.dislikesCount = 214;
    _vdo7.duration = '00:00:53';
    _vdo7.viewsCount = 15646;
    _vdo7.videoSource = VideoSource.File;
    _vdo7.src = `assets/videodata/comedy/Cat Funny Viral Videos.mp4`;
    _vdo7.categories = [
      new VideoCategoryModel('Comedy', 'vc2')
    ];

    let _vdo8 = new VideoModel();
    _vdo8.id = 'vid_cm_8';
    _vdo8.title = `DAD TRY TO MAKE SON SAY DAD`;
    _vdo8.likesCount = 1245;
    _vdo8.dislikesCount = 122;
    _vdo8.duration = '00:00:53';
    _vdo8.viewsCount = 15346;
    _vdo8.videoSource = VideoSource.File;
    _vdo8.src = `assets/videodata/comedy/DAD TRY TO MAKE SON SAY DAD.mp4`;
    _vdo8.categories = [
      new VideoCategoryModel('Comedy', 'vc2')
    ];

    let _vdo9 = new VideoModel();
    _vdo9.id = 'vid_cm_9';
    _vdo9.title = `SCARRY PUMPKIN`;
    _vdo9.likesCount = 125;
    _vdo9.dislikesCount = 15;
    _vdo9.duration = '00:00:18';
    _vdo9.viewsCount = 1245;
    _vdo9.videoSource = VideoSource.File;
    _vdo9.src = `assets/videodata/comedy/SCARRY PUMPKIN.mp4`;
    _vdo9.categories = [
      new VideoCategoryModel('Comedy', 'vc2')
    ];


    //#endregion

    //#region food
    let _vdo10 = new VideoModel();
    _vdo10.id = 'vid_fd_10';
    _vdo10.title = `Almond Pudding`;
    _vdo10.likesCount = 1247;
    _vdo10.dislikesCount = 142;
    _vdo10.duration = '00:01:03';
    _vdo10.viewsCount = 3695;
    _vdo10.videoSource = VideoSource.File;
    _vdo10.src = `assets/videodata/food/Almond Pudding.mp4`;
    _vdo10.categories = [
      new VideoCategoryModel('Food', 'vc3'),
    ];

    let _vdo11 = new VideoModel();
    _vdo11.id = 'vid_fd_11';
    _vdo11.title = `Apple cider caramel popcorn`;
    _vdo11.likesCount = 1247;
    _vdo11.dislikesCount = 142;
    _vdo11.duration = '00:01:03';
    _vdo11.viewsCount = 3695;
    _vdo11.videoSource = VideoSource.File;
    _vdo11.src = `assets/videodata/food/Apple cider caramel popcorn.mp4`;
    _vdo11.categories = [
      new VideoCategoryModel('Food', 'vc3'),
    ];

    let _vdo12 = new VideoModel();
    _vdo12.id = 'vid_fd_12';
    _vdo12.title = `Apple Pie Bites`;
    _vdo12.likesCount = 1578;
    _vdo12.dislikesCount = 154;
    _vdo12.duration = '00:00:47';
    _vdo12.viewsCount = 3654;
    _vdo12.videoSource = VideoSource.File;
    _vdo12.src = `assets/videodata/food/Apple Pie Bites.mp4`;
    _vdo12.categories = [
      new VideoCategoryModel('Food', 'vc3'),
    ];

    let _vdo13 = new VideoModel();
    _vdo13.id = 'vid_fd_13';
    _vdo13.title = `Asian baked chicken wings`;
    _vdo13.likesCount = 654;
    _vdo13.dislikesCount = 59;
    _vdo13.duration = '00:00:47';
    _vdo13.viewsCount = 3244;
    _vdo13.videoSource = VideoSource.File;
    _vdo13.src = `assets/videodata/food/Asian baked chicken wings.mp4`;
    _vdo13.categories = [
      new VideoCategoryModel('Food', 'vc3'),
    ];

    let _vdo14 = new VideoModel();
    _vdo14.id = 'vid_fd_14';
    _vdo14.title = `Bacon jalapeño grilled cheese`;
    _vdo14.likesCount = 1245;
    _vdo14.dislikesCount = 69;
    _vdo14.duration = '00:00:15';
    _vdo14.viewsCount = 3265;
    _vdo14.videoSource = VideoSource.File;
    _vdo14.src = `assets/videodata/food/Bacon jalapeño grilled cheese.mp4`;
    _vdo14.categories = [
      new VideoCategoryModel('Food', 'vc3'),
    ];
    //#endregion

    this.videoList = [_vdo1, _vdo2, _vdo3, _vdo4, _vdo5, _vdo6, _vdo7, _vdo8, _vdo9, _vdo10, _vdo11, _vdo12, _vdo13, _vdo14];
  }


  public getAdVideos() {

  }

}
