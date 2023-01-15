import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Product[];

  constructor(private productService: ProductService, private route:Router) { }

  ngOnInit(): void {
    this.getProduct();
  }
  
  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.product = data;
    });
  }


  deleteProduct(id: string){
    this.productService.deleteproduct(id).subscribe( data => {
      console.log(data);
      this.getProduct();
    })
  }

}
