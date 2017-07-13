import { environment } from '../../environments/environment';

import { Post } from '../models/';

import axios from 'axios';

export class PostsService {

  private _http;

  constructor() {
    console.log(environment.apiUrl);
    this._http = axios;
  }

  public save(data: Post) {
    console.log("Salvando en el servicio")
    if (data.id == null || data.id == undefined)
      return this._post(data);
    return this._put(data);
  }

  private _post(data: Post) {
    console.info("Haciendo post!")
    return this._http.post(`${environment.apiUrl}/posts/`, data);
  }

  private _put(data: Post) {
    console.info("Haciendo put!")
    return this._http.put(`${environment.apiUrl}/posts/${data.id}/`, data);
  }

  public fetchAll(){
    return this._http.get(`${environment.apiUrl}/posts/`)
      .then((response) => {
        const fetched = [];
        for(let post of response.data){
          fetched.push(new Post(post.title, post.id))
        }
        return fetched;
      },(error) => console.warn(error));
  }

}