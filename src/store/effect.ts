import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PostActions from './action'
import { catchError, map, mergeMap, of } from "rxjs";
import {AppServiceService} from '../services/app-service.service'
import { Injectable } from "@angular/core";

@Injectable()
export class PostEffects {
    getPosts$ = createEffect(()=>
    this.actions$.pipe(ofType(PostActions.getPosts), mergeMap(()=>{
        return this.postService.getPosts()
        .pipe(map((posts)=>PostActions.getPostsSuccess({posts})), catchError((error)=>{
            return of(PostActions.getPostsFailure({ error: error.message }));
        }))
    })))
    constructor(private actions$:Actions,
         private postService:AppServiceService){}
}