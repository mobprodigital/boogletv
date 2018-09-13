import { CategoryModel } from "./category.model";
import { IthumbnailSize } from "../interfaces/thumbnail.interface";
import { VideoSource } from "../enums/videosource.enum";

export class VideoModel {
    public id: string = '';
    public title: string = '';
    public description: string = '';
    public categories: CategoryModel[] = [];
    public likesCount: number = 0;
    public dislikesCount: number = 0;
    public viewsCount: number = 0;
    public duration: string = '';
    public tags: string[] = [];
    public minAgeReq: number = 0;
    public createDate: Date;
    public videoSource: VideoSource;
    public hidden: boolean = false;
    public thumbnails: IthumbnailSize = {
        orignal: '',
        large: '',
        medium: '',
        small: '',
    };
    public src: string = '';
}
