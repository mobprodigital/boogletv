import { VideoCategory } from "./video-category.model";
import { ThumbnailSize } from "../interfaces/thumbnail.interface";

export class Video {
    public Id: string;
    public Title: string;
    public Description: string;
    public Categories: VideoCategory[];
    public LikesCount: number;
    public DislikesCount: number;
    public ViewsCount: number;
    public ReleaseDate: Date;
    public CreateDate: Date;
    public Thumbnails: ThumbnailSize = {
        Orignal: '',
        Large: '',
        Medium: '',
        small: '',
    };
    public Src: string;
    constructor() {

    }
}