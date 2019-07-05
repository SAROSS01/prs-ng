export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    email: string;
    isPreApproved: boolean;
    about(): string {
        return "Vendor: id=" + this.id + ", code=" + this.code + ", name=" + this.name + ", address=" + this.address
            + ", city=" + this.city + ", state=" + this.state + ", zip=" + this.zip + ", phone number="
            + this.phoneNumber + ", email=" + this.email + ", isPreApproved=" + this.isPreApproved;
    }
    constructor(id: number = 0, code: string = "", name: string = " ", address: string = " ", city: string = " ", state: string = "", zip: string = "", phoneNumber: string = "", email: string = " ", isPreApproved: boolean = false) {
        this.id = id;
      this.code = code;
      this.name = name;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
this.isPreApproved = isPreApproved;
     }

    
}