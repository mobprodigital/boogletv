export class VideoCategory {
    /**
     * Name of the Category
     */
    public Name: string = '';
    /**
     * Id of the Category
     */
    public Id: string = '';
    /**
     * Parent category id if parent exists, otherwise null
     */
    public parentCategoryId: string | null = null;
    /**
     * Child category array
     */
    public Categories: Array<VideoCategory> = [];
}