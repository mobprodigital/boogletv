export class VideoCategory {
    /**
     * Name of the Category
     */
    public name: string = '';
    /**
     * Id of the Category
     */
    public id: string = '';

    /**
     * Child category array
     */
    public categories: Array<VideoCategory> = [];

    constructor(Name: string, Id: string, Categories?: Array<VideoCategory>) {
        this.id = Id;
        this.name = Name;
        if (Categories && Categories.length > 0) {
            this.categories = Categories;
        }
    }
}