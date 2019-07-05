import { Vendor } from "./vendor.class";
export class Product {
  id: number;
  vendor: Vendor;
  partNumber: string;
  name: string;
  price: number;
  unit: string;
  photoPath: string;
  
  constructor(inId: number = 0,inV: Vendor = null, inPN: string = '', inN: string = '', inP: number = 0, inU: string = '', inPP: string = '') {
    this.id = inId;
    this.vendor = inV;
    this.partNumber = inPN;
    this.name = inN;
    this.price = inP;
    this.unit = inU;
    this.photoPath = inPP;
  }
}