import { MovieCategory } from "./movie-category.modal";

export class Video {
    public Id: string;
    public Title: string;
    public Description: string;
    public Categories: MovieCategory[];
    public LikesCount: number;
    public DislikesCount: number;
    public ViewsCount: number;
    public ReleaseDate: Date;
    public CreateDate: Date;
    constructor(){
        
    }
}