
import { PostsService } from '../services';

export class Post {

    id?: string;
    title: string;


    constructor(private _postsService: PostsService) {
        console.info("Clase Post Creado");
    }

    public is_valid(): boolean {
        return this.id != null && this.title != null;
    }

    public save(): any {
        return this.is_valid() || this._postsService.save(this.serialize());
    }

    private serialize(): any {
        return {
            id: this.id,
            title: this.title
        }
    }
}