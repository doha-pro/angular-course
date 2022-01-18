export interface Product{
    name:string,
    price :number,
    description:string,
    discount ?:number,
    imageUrl:string, 
    qnty:number
}
export interface ProductDetails{
    products:Product[],
    itemsNumber:number,
    Total:number
}