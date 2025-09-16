import { Component,OnInit } from '@angular/core';
import { Product } from '../modelo/product';
import{ProductService}from '../services/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit{
  products:Product[]=[];
  constructor(private productService:ProductService){}
  async ngOnInit(){
    this.products=await this.productService.getProducts();
    console.log('Productos cargados:', this.products);
  }
}
