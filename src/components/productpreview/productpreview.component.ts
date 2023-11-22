import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { filter, map,pipe } from 'rxjs';
import { PostInterface } from 'src/interface/genric';
import { ProductdetailmodalComponent } from 'src/modal/productdetailmodal/productdetailmodal.component';

@Component({
  selector: 'app-productpreview',
  templateUrl: './productpreview.component.html',
  styleUrls: ['./productpreview.component.css']
})
export class ProductpreviewComponent implements OnInit {
    @Input() productlist: any;
    @Input() searchterm!: string;
  dialogRef!: MatDialogRef<ProductdetailmodalComponent, any>;
    constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.productlist.subscribe((response:PostInterface[]) => {
     this.productlist = response;
    })
  }
    openDialog(id: any): void {
      const productData =  this.productlist.filter((value: any) => value['id'] === id);
      this.dialogRef = this.dialog.open(ProductdetailmodalComponent, {
        width: '1050px',
        height:'auto',
        data: productData[0],
        panelClass: 'custom-modalbox'
      })
  
      // this.dialogRef.afterClosed().subscribe((result: any) => {
      //   console.log('The dialog was closed',result);
      // })
    }

  ngOnDestroy() {
    this.productlist.unsbscribe();
  }
}


