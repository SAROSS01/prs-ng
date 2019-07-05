import { User } from './user.class';
export class PurchaseRequest {
    id: number;
    user: User;
    userName: string; 
    description: string;
    justification: string;
    dateNeeded: Date;
    deliveryMode: string;
    status: string;
    total: number;
    submittedDate: Date;
    reasonForRejection: string;

    static sortableKeys = ['Id', 'Description', 'DateNeeded', 'Status', 'SubmittedDate'];

    constructor(id: number = 0, user: User = null, desc: string = '', just: string = '', dateNeeded: Date = null,
                dlvMode: string = '', stauts: string='', total: number=0, subDate: Date=null, rej: string = null) {
        this.id = id;
        this.user = user;
        this.description = desc;
        this.justification = just;
        this.dateNeeded = dateNeeded;
        this.deliveryMode = dlvMode;
        this.status = status;
        this.total = total;
        this.submittedDate = subDate;
        this.reasonForRejection = rej;
    }
  
}