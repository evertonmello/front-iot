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
  public dimensions = {
      height: 0,
      length:0,
      width:0
  }

  constructor(public mainService:MainService) { 
  }
  
  ngOnInit(){ }

  post(){
   return this.mainService.post(this.dimensions)    
  }

  send(){
    this.post().then( (res) =>{
      console.log(res)
    })
  }

}
