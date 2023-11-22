import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostActions from '../store/action';
import { isLoadingSlector$, selectCustomerById } from 'src/store/custom';
import { AppStateInterface } from 'src/interface/postsState';
import { Observable, filter, map } from 'rxjs';
import { postSlector } from '../store/custom'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  isloading: Observable<boolean>
  searchterm:string = '';
  public product = this.store.select(postSlector);
constructor( private store:Store<AppStateInterface>) {
  this.isloading = this.store.pipe(select(isLoadingSlector$));
}

ngOnInit(): void {
  let data = this.store.dispatch(PostActions.getPosts());
}
addItem(newItem: string) {
  this.searchterm = newItem;
}
}