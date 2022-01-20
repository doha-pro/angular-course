import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './body/product-container/product-container.component';
import { ProductDetailsComponent } from './body/product-details/product-details.component';


const routes: Routes = [
  { path: 'home', component: ProductContainerComponent },
  { path: '', redirectTo:'/home', pathMatch :'full'},
  { path: 'details', component: ProductDetailsComponent },
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
