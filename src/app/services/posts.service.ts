import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';



@Injectable()
export class PostsService {

  constructor(private _http: Http) {
    console.log(environment.apiUrl)
   }

  public save(data:any){
    if(data['id'] == null)
      return this._post(data);
    return this._put(data);
  }

  private _post(data:any){
    this._http.post(environment.apiUrl + '/posts/', data);
  }

  private _put(data:any){
    this._http.put(environment.apiUrl + '/posts/' + data['id']+'/', data);
  }

}
