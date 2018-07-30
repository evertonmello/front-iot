import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class MainService {  

  
  constructor(private http: Http) {     
  };

  post(param: any): Promise<any> {    
    return this.http
      .post('http://localhost:8000/users', param)
      .toPromise()
      .then()
      .catch();
  }
}
