import { EventEmitter } from "@angular/core";
import { Product } from "../_models/product.model";

export class ProductServices{
    itemAdded:EventEmitter<Product>=new EventEmitter<Product>();

  // productArray: Product[] = [
  //   {
  //     id: 1,
  //     data: [{id:1, name: 'Product 1', description: 'Product 1 description', lang: {id:1, name: 'English'}}],
  //     price: 100,
  //     discount: 10,
  //     imagesUrls: 'https://picsum.photos/200/300',
  //     category: {id: 1, name: 'Category 1'},
  //     tags: [{id: 1, name: 'Tag 1'}, {id: 2, name: 'Tag 2'}],
  //     paymentTypes: [
  //       {id: 1, name: 'Visa'},
  //     ]
  //   },
  //   {
  //     id: 2,
  //     data: [{id:2, name: 'Product 2', description: 'Product 2 description', lang: {id:1, name: 'English'}}],
  //     price: 200,
  //     discount: 30,
  //     imagesUrls: 'https://picsum.photos/200/400',
  //     category: {id: 2, name: 'Category 2'},
  //     tags: [{id: 3, name: 'Tag 3'}, {id: 4, name: 'Tag 4'}],
  //     paymentTypes: [
  //       {id: 2, name: 'MasterCard'},
  //     ]
  //   },
  //   {
  //     id: 3,
  //     data: [{id:3, name: 'Product 3', description: 'Product 3 description', lang: {id:1, name: 'English'}}],
  //     price: 2000,
  //     imagesUrls: 'https://picsum.photos/200/200',
  //     category: {id: 3, name: 'Category 3'},
  //     tags: [{id: 5, name: 'Tag 5'}, {id: 6, name: 'Tag 6'}],
  //     paymentTypes: [
  //       {id: 3, name: 'American Express'},
  //     ]
  //   },
  //   {
  //     id: 4,
  //     data:[ {id:4, name: 'Product 4', description: 'Product 4 description', lang: {id:1, name: 'English'}}],
  //     price: 200000,
  //     imagesUrls: 'https://picsum.photos/200/100',
  //     category: {id: 4, name: 'Category 4'},
  //     tags: [{id: 7, name: 'Tag 7'}, {id: 8, name: 'Tag 8'}],
  //     paymentTypes: [
  //       {id: 4, name: 'PayPal'},
  //     ]
  //   },
  //   {
  //     id: 5,
  //     data: [{id:5, name: 'Product 5', description: 'Product 5 description', lang: {id:1, name: 'English'}}],
  //     price: 20000,
  //     discount: 30,
  //     imagesUrls: 'https://picsum.photos/200/50',
  //     category: {id: 5, name: 'Category 5'},
  //     tags: [{id: 9, name: 'Tag 9'}, {id: 10, name: 'Tag 10'}],
  //     paymentTypes: [
  //       {id: 5, name: 'Maestro'},
  //     ]
  //   },
  //   {
  //     id: 6,
  //     data: [{id:6, name: 'Product 6', description: 'Product 6 description', lang: {id:1, name: 'English'}}],
  //     price: 20000,
  //     discount: 30,
  //     imagesUrls: 'https://picsum.photos/200/50',
  //     category: {id: 6, name: 'Category 6'},
  //     tags: [{id: 11, name: 'Tag 11'}, {id: 12, name: 'Tag 12'}],
  //     paymentTypes: [
  //       {id: 6, name: 'Discover'},
  //     ]
  //   },
  //   {
  //     id: 7,
  //     data: [{id:7, name: 'Product 7', description: 'Product 7 description', lang: {id:1, name: 'English'}}],
  //     price: 20000,
  //     discount: 30,
  //     imagesUrls: 'https://picsum.photos/200/50',
  //     category: {id: 7, name: 'Category 7'},
  //     tags: [{id: 13, name: 'Tag 13'}, {id: 14, name: 'Tag 14'}],
  //     paymentTypes: [
  //       {id: 7, name: 'JCB'},
  //     ]
  //   },
  //   {
  //     id: 8,
  //     data: [{id:8, name: 'Product 8', description: 'Product 8 description', lang: {id:1, name: 'English'}}],
  //     price: 20000,
  //     discount: 30,
  //     imagesUrls: 'https://picsum.photos/200/50',
  //     category: {id: 8, name: 'Category 8'},
  //     tags: [{id: 15, name: 'Tag 15'}, {id: 16, name: 'Tag 16'}],
  //     paymentTypes: [
  //       {id: 8, name: 'UnionPay'},
  //     ]
  //   },
  //   {
  //     id: 9,
  //     data: [{id:9, name: 'Product 9', description: 'Product 9 description', lang: {id:1, name: 'English'}}],
  //     price: 20000,
  //     discount: 30,
  //     imagesUrls: 'https://picsum.photos/200/50',
  //     category: {id: 9, name: 'Category 9'},
  //     tags: [{id: 17, name: 'Tag 17'}, {id: 18, name: 'Tag 18'}],
  //     paymentTypes: [
  //       {id: 9, name: 'Diners Club'},
  //     ]
  //   },
  // ];






    productArray:Product[]=[ 
        {id:1 ,name:"one",price:100,description:"This is number one",discount:50,qnty:1,imageUrl:"https://picsum.photos/200/100"},
        {id:2,name:"two",price:200,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/200",qnty:1},
        {id:3 ,name:"three",price:300,description:"This is number one",imageUrl:"https://picsum.photos/200/300",qnty:1},
        {id: 4,name:"four",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400",qnty:1},
        {id:5 ,name:"five",price:100,description:"This is number one",imageUrl:"https://picsum.photos/200/100",qnty:1},
        {id:6 ,name:"six",price:200,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/200",qnty:1},
        {id:7 ,name:"seven",price:300,description:"This is number one",imageUrl:"https://picsum.photos/200/300",qnty:1},
        {id:8 ,name:"eight",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400",qnty:1},
        {id:9 ,name:"nine",price:400,description:"This is number one",discount:50,imageUrl:"https://picsum.photos/200/400",qnty:1}
      ];
      constructor(){}
    getAllProducts():Product[]{
        return this.productArray.slice();
    }
    getProductbyId(id:number):Product |undefined{
        return this.productArray.find(i=>i.id===id)
    }
    addProduct(product:Product):void{
        this.productArray.push(product);
    }
    deleteProduct(id:number){
        this.productArray.filter(item=>item.id!=id)

    }
    updateProduct(){}
    cartArray:Product[]=[]
    additemToCart(product:Product):Product[]{
      const  result=[...this.cartArray,product]
        this.cartArray=result
        console.log("the cart array")
        console.log(this.cartArray)
        return result
    }
}