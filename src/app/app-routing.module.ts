import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './body/product-container/product-container.component';
import { ProductDetailsComponent } from './body/product-details/product-details.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterationComponent } from './pages/registeration/registeration.component';


const routes: Routes = [
  { path: 'home', component: ProductContainerComponent },
  { path: '', redirectTo:'/home', pathMatch :'full'},
  { path: 'details', component: ProductDetailsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registeration', component: RegisterationComponent },
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
