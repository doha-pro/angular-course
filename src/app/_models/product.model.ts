import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { ProductLang } from "./product-lang.model";
import { Tag } from "./tags.model";
// export interface Product {
//     id?: number,
//     data:ProductLang[]
//     price: number,
//     discount?: number,
//     imagesUrls: string,
//     category: Category,
//     paymentTypes: PaymentType[],
//     tags:Tag[]
// }
export interface ProductDetails{
    products:Product[],
    itemsNumber:number,
    Total:number
}
export interface Product{
    id ?:number,
    name:string,
    price :number,
    description:string,
    discount ?:number,
    imageUrl:string, 
    qnty:number
}