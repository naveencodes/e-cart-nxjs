import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppServiceService } from 'src/services/app-service.service';
import * as PostActions from '../store/action'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  constructor( private store:Store){}
  
  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts())
  }
  }
