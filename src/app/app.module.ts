import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';
import { MiddleNavComponent } from './navigation/middle-nav/middle-nav.component';
import { BottomNavComponent } from './navigation/bottom-nav/bottom-nav.component';
import { ProductItemComponent } from './body/product-item/product-item.component';
import { ItemListingChildComponent } from './body/item-listing-child/item-listing-child.component';
import { ItemListingParentComponent } from './body/item-listing-parent/item-listing-parent.component';
import { PagingComponent } from './body/paging/paging.component';
import { FiltersComponent } from './body/filters/filters.component';
import { ProductServices } from './_services/product.services';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MiddleNavComponent,
    BottomNavComponent,
    ProductItemComponent,
    ItemListingChildComponent,
    ItemListingParentComponent,
    PagingComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FontAwesomeModule
    
  ],
  providers: [ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
