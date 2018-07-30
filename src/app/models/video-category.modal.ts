export class VideoCategory {
    public Name: string = '';
    public Id: string = '';
    public parentCategoryId : string = '';
    public ChildCategories: Array<VideoCategory> = [];
}