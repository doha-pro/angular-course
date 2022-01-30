import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/_models/category.model';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  categories!: Category[];

  ngOnInit(): void {
    this.categories = this.getAllCategories();
  }
  getAllCategories(): Category[] {
    return this.categoryService.getAllCategories();
  }
  onFormSubmit(form: any):void {
    // this.router.navigate(['/product','details','6010736031e4fe0015d3b970'])
   console.log(form);
    // this.product = {...form.value};
    // this.product.paymentTypes = this.paymentTypes;
  }

}
