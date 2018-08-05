import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class MainService {  

  
  constructor(private http: Http) {     
  };

  post(param: any): Promise<any> {    
    var params = 'dimensions=' + param;
    var cabe = new Headers();
    cabe.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:3000', 
    params, {
             headers : cabe
            })
            .toPromise()
            .then(res=> res.json());
    
 }


  get(){
    return this.http.get('http://localhost:3000')
      .toPromise()
      .then(this.parseData)
  }

  parseData(response){
    return JSON.parse(response['_body'])
  }

}
