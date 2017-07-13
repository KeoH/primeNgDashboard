
import { PostsService } from '../services';


export class Post {

    id?: string;
    title: string;
    private _postsService: PostsService

    constructor(title: string, id?: string) {
        console.info("Clase Post Creado");
        this.title = title;
        if(id)
            this.id = id;
        this._postsService = new PostsService()
    }

    public is_valid(): boolean {
        return this.title != null;
    }

    public save(): any {
        if (this.is_valid())
            return this._postsService.save(this);
        return null;
    }

    private serialize(): any {
        return {
            id: this.id,
            title: this.title
        }
    }
}