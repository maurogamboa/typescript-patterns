import { Factory } from "../../patterns/factory/factoryPattern";

interface IProduct {
  sku: string;
  dispach();
}

class PepsiProduct implements IProduct {
  sku = "123456";
  dispach() {
    console.log("dispach product");
  }
}

const factoryProduct = new Factory<IProduct, string>();
factoryProduct.register(PepsiProduct, "pepsi");
const pepsi = factoryProduct.createInstance("pepsi"); //Get concrete implementation
