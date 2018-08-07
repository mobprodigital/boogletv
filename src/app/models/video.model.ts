import { VideoCategory } from "./video-category.model";
import { ThumbnailSize } from "../interfaces/thumbnail.interface";
import { VideoSource } from "../enums/videosource.enum";

export class Video {
    public id: string = '';
    public title: string = '';
    public description: string = '';
    public categories: VideoCategory[] = [];
    public likesCount: number = 0;
    public dislikesCount: number = 0;
    public viewsCount: number = 0;
    public duration: string = '';
    public releaseDate: Date;
    public createDate: Date;
    public videoSource: VideoSource;
    public hidden: boolean = false;
    public thumbnails: ThumbnailSize = {
        orignal: '',
        large: '',
        medium: '',
        small: '',
    };
    public src: string = '';
   
}