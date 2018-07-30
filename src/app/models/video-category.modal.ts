export class VideoCategory {
    public Name: string = '';
    public Id: string = '';
    public parentCategoryId: string | null = '';
    public ChildCategories: Array<VideoCategory> = [];
}