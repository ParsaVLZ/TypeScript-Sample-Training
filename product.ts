interface IProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  interface IProductUpdate {
    id?: number;
    name?: string;
    price?: number;
    quantity?: number;
  }
  
  interface IResponseMessage {
    message: string;
    statusCode: number;
  }
  
  interface IProductManagement {
    create(product: IProduct): IResponseMessage;
    update(id: number, data: IProductUpdate): IResponseMessage;
    delete(id: number): IResponseMessage;
    getProducts(): IProduct[];
  }
  
  class Product implements IProductManagement {
    private products: IProduct[] = [];
  
    create(product: IProduct): IResponseMessage {
      this.products.push(product);
      return {
        statusCode: 201,
        message: `Product ${product.name} Created Successfully!`,
      };
    }
  
    update(id: number, data: IProductUpdate): IResponseMessage {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        Object.assign(product, data);
        return {
          statusCode: 200,
          message: `Product ${product.name} Updated Sucessfully!`,
        };
      } else {
        return {
          statusCode: 404,
          message: `Product with ID ${id} Not Found! :(`,
        };
      }
    }
  
    delete(id: number): IResponseMessage {
      const index = this.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        const deletedProduct = this.products.splice(index, 1)[0];
        return {
          statusCode: 200,
          message: `Product ${deletedProduct.name} Deleted Successfully!`,
        };
      } else {
        return {
          statusCode: 404,
          message: `Product with ID ${id} Not Found! :(`,
        };
      }
    }
  
    getProducts(): IProduct[] {
      return this.products;
    }
  }
  
const basket = new Product();

console.log(basket.create({ id: 1, name: 'MacBook', price: 1400, quantity: 2 }));
console.log(basket.create({ id: 2, name: 'IPhone 12 Pro', price: 800, quantity: 4 }));
console.log(basket.getProducts());

console.log(basket.update(1, { price: 1800, quantity: 10 }));
console.log(basket.getProducts());

console.log(basket.delete(2));
console.log(basket.getProducts());