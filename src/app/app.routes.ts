import { Routes } from '@angular/router';
import { ProductList } from "./product-list/product-list";
export const routes: Routes = [
    {path:'product-list', component:ProductList},
    {path:'', redirectTo: '/product-list', pathMatch:'full'}
];