import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, take } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() query = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<any>();
  searchstring:any;
  searchForm: FormGroup = new FormGroup({
  searchProduct: new FormControl('')
  })
constructor() {
  this.searchForm.get('searchProduct')?.valueChanges
    .pipe(
      debounceTime(1000),
      distinctUntilChanged())
    .subscribe(
      (v)=>{
        console.log(v)
        this.search.emit(v);
      }
    )
}
  // onSearch(event:Event): void {
  //   this.search.emit((event.target as HTMLTextAreaElement).value);
  // }
}
