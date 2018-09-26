import { Injectable } from '@angular/core';
import { AjaxService } from '../ajax/ajax.service';
import { VideoModel } from '../../models/video.model';
import { CategoryModel } from '../../models/category.model';
import { CategoryService } from '../categories/category.service';


@Injectable()
export class VideoService {

  constructor(private _ajaxService: AjaxService, private _categoryService: CategoryService) {
    this._categoryService.getAllCategories().then(catList => this.allCategories = catList);
  }

  private allCategories: CategoryModel[] = [];

  /**
   * Get single video by its id
   * @param videoId Video Id
   */q
  public getVideoById(videoId: number): Promise<VideoModel> {
    return new Promise((resolve, reject) => {
      this._ajaxService.Post({
        apiName: 'getVideoById.php',
        dataToSend: {
          id: videoId
        }
      }).then(data => {
        if (data.status === true) {
          this.parseVideoModel([data.data]).then(vid => {
            resolve(vid[0]);
          }).catch(err => {
            reject(err);
          });
        }
      }).catch(err => reject(err));
    });
  }

  /**
   * Get all videos of specified category ids
   * @param catIdArray array of category ids
   * @param fromIndex (Optional) (Default = 0) Zero based index number from witch video start 
   * @param count (Optional) (Default = 10) number of videos wants to get 
   */
  public getVideoByCategoryId(catIdArray: number[] = [], fromIndex: number = 0, count: number = 10): Promise<VideoModel[]> {
    return new Promise((resolve, reject) => {
      this._ajaxService.Post({
        apiName: 'getVideoByCategoryId.php',
        dataToSend: {
          id: catIdArray,
          start: fromIndex,
          count: count
        }
      }).then(ajaxResponse => {
        if (ajaxResponse.status === true) {
          this.parseVideoModel(ajaxResponse.data).then(vid => {
            resolve(vid);
          }).catch(err => {
            reject(err);
          });
        }
      }).catch(err => {
        reject(err);
      })
    });
  }

  /**
   * Get most liked videos of optional specified category ids
   * @param catIdArray (optional) (default = []) array of category ids
   * @param fromIndex (Optional) (Default = 0) Zero based index number from witch video start 
   * @param count (Optional) (Default = 10) number of videos wants to get 
   */
  public getMostLikedVideosByCategoryId(catIdArray: number[] = [], fromIndex: number = 0, count: number = 10): Promise<VideoModel[]> {
    return new Promise((resolve, reject) => {
      this._ajaxService.Post({
        apiName: 'getMostLikedVideosByCategoryId.php',
        dataToSend: {
          id: catIdArray,
          start: fromIndex,
          count: count
        }
      }).then(ajaxResponse => {
        if (ajaxResponse.status === true) {
          this.parseVideoModel(ajaxResponse.data).then(vid => {
            resolve(vid);
          }).catch(err => {
            reject(err);
          });
        }
      }).catch(err => reject(err));
    });
  }

  /**
   * getAllVideos
   */
  public getAllVideos(fromIndex: number = 0, count: number = 10): Promise<VideoModel[]> {
    return new Promise((resolve, reject) => {
      this._ajaxService.Post({
        apiName: 'getAllVideos.php',
        dataToSend: {
          start: fromIndex,
          count: count
        }
      }).then(ajaxResponse => {
        if (ajaxResponse.status === true) {
          this.parseVideoModel(ajaxResponse.data).then(vid => {
            resolve(vid);
          }).catch(err => {
            reject(err);
          });
        }
      }).catch(err => reject(err));
    });
  }

  /**
   * 
   * @param videId Video Id
   * @param time Time in seconds
   */
  public setVideoTimeByVideoId(videoId: number, time: number): Promise<string> {
    return new Promise((resolve, reject) => {
      this._ajaxService.Post({
        apiName: 'setViewTimeByVideoId.php',
        dataToSend: {
          id: videoId,
          time: time
        }
      }).then(res => {
        if (res.status === true) {
          resolve(res.msg);
        }
        else {
          reject(res.msg);
        }
      }).catch(err => reject(err));
    });

  }

  /**
   * Parse video data array into VideoModel class array
   * @param videoDataArr Raw array of video data from web service
   */
  private parseVideoModel(videoDataArr: any[]): Promise<VideoModel[]> {

    let fileBaseUrl: string = 'http://192.168.0.7/boogletv/';

    let videoArr: VideoModel[] = [];
    if (videoDataArr && videoDataArr.length > 0) {
      return Promise.all(videoDataArr.map(async (vid) => {
        let _vid = new VideoModel();
        _vid.id = parseInt(vid.id, 10);

        if (vid.categories && vid.categories.length > 0) {
          vid.categories.forEach(catId => {
            let catFound = this.allCategories.find(cat => cat.id == catId);
            if (catFound) {
              _vid.categories.push(catFound);
            }
          });
        }
        _vid.title = vid.title;
        _vid.description = vid.description;
        _vid.tags = vid.tags;
        _vid.src = fileBaseUrl + vid.videoUrl;
        _vid.minAgeReq = parseInt(vid.minAgeReq, 10);
        _vid.viewsCount = parseInt(vid.viewsCount, 10);
        _vid.likesCount = parseInt(vid.likesCount, 10);
        _vid.dislikesCount = parseInt(vid.dislikesCount, 10);

        let _dateArr = vid.createDate.split('/');
        _vid.createDate = new Date(parseInt(_dateArr[2]), parseInt(_dateArr[1], parseInt(_dateArr[0])));

        _vid.thumbnails.large = fileBaseUrl + vid.thumbnails.large;
        _vid.thumbnails.medium = fileBaseUrl + vid.thumbnails.medium;
        _vid.thumbnails.small = fileBaseUrl + vid.thumbnails.small;

        return _vid;
      }))
    }
    else {
      return Promise.reject('No videos found');
    }
  }

  /**
   * 
   * @param videoId Video id
   * @param catId Category id
   */
  public getRelatedVideos(videoId: number, catId: number): Promise<VideoModel[]> {
    return new Promise((resolve, reject) => {
      this._ajaxService.Post({
        apiName: 'getRelatedVideosByVideoId.php',
        dataToSend: {
          vid: videoId,
          cid: catId
        }
      }).then(data => {
        if (data.status === true) {
          this.parseVideoModel(data.data).then(vdos => {
            resolve(vdos);
          }).catch(err => reject(err));
        }
        else {
          reject(data.msg);
        }
      }).catch(err => reject(err));
    });
  }

}
