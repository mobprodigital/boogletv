import { VideoCategory } from "./video-category.model";
import { ThumbnailSize } from "../interfaces/thumbnail.interface";
import { VideoSource } from "../enums/videosource.enum";

export class Video {
    public id: string;
    public title: string;
    public description: string;
    public categories: VideoCategory[] = [];
    public likesCount: number;
    public dislikesCount: number;
    public viewsCount: number;
    public duration: string;
    public releaseDate: Date;
    public createDate: Date;
    public videoSource: VideoSource;
    public thumbnails: ThumbnailSize = {
        orignal: '',
        large: '',
        medium: '',
        small: '',
    };
    public src: string;
    constructor() {
        this.id = '';
        this.title = '';
        this.description = '';
        this.likesCount = 0;
        this.dislikesCount = 0;
        this.viewsCount = 0;
        this.duration = '00:00:00';
        this.videoSource = VideoSource.File;
    }
}