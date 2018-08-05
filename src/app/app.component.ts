import { MainService } from './main.service';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';
  public porcentagem = 0;
  public dimensions = {
      height: 2,
      length: 3,
      width: 5
  }

  constructor(public mainService:MainService) { 
  }
  
  ngOnInit(){ }

  post(){
   return this.mainService.post(this.dimensions)    
  }

  get(){
    return this.mainService.get()
  }

  send(){
    this.mainService.post(JSON.stringify(this.dimensions)).then((res) =>{
      this.porcentagem = res.porcentagem
      console.log(this.porcentagem)
    });
  }

}
