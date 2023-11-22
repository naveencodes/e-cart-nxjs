import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostInterface } from 'src/interface/genric';
@Component({
  selector: 'app-productdetailmodal',
  templateUrl: './productdetailmodal.component.html',
  styleUrls: ['./productdetailmodal.component.css']
})
export class ProductdetailmodalComponent {

  constructor(
    public dialogRef: MatDialogRef<ProductdetailmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostInterface) 
    {console.log('data',data.title);}
  onNoClick(): void {
    this.dialogRef.close();
  }
  addToCart(id:string) {
    console.log(id)
  }
}
