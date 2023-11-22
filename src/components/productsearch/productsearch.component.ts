import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-productsearch',
  template: `
        <form [formGroup]="searchForm">
        <input placeholder="Search for a Product"type="text" formControlName="searchProduct" class="p-2 w-full rounded-lg searchInput"[value]="query">
        </form>
        `,
styles: [`
.searchInput {
    width: 50%;
    height: 30px;
    border: 1px solid #ffffff;
    border-radius: 20px;
    margin: 2%;
    padding: 5px;
    text-align: justify;
    font-size: large;
}
`]
})
export class ProductsearchComponent {
  @Input() query = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<any>();
  searchstring:any;
  searchForm: FormGroup = new FormGroup({
  searchProduct: new FormControl('')
  })
  constructor() {
  }
 
  onSearch(event:Event): void {
    this.searchForm.get('search')?.valueChanges
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      take(1))
    .subscribe(
      (v)=>{
        console.log(v);
        this.search.emit(v);
      }
    )
  }
}
