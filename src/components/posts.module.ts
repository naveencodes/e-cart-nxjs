import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from 'src/store/reducer';
import { PostsComponent } from './posts.component';
import { PostEffects } from 'src/store/effect';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { ProductpreviewComponent } from './productpreview/productpreview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/shared/filter.pipe';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductdetailmodalComponent } from 'src/modal/productdetailmodal/productdetailmodal.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    PostsComponent,
    HeaderComponent,
    ProductsearchComponent,
    ProductpreviewComponent,
    FilterPipe,
    ShoppingcartComponent,
    ProductdetailmodalComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule, 
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostEffects]),
  ],
  providers: [],
})
export class PostsModule { }
