import { Component, OnInit } from '@angular/core';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';
import { JsonResponse } from '@model/json-response.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  jr: JsonResponse;
  titles: string = 'user-List';

  constructor(
    private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        if(this.jr.errors == null){
        this.users = this.jr.data as User[];
        console.log(this.users);
        } else{ console.log("error")

        }


      }
    )
  }

}
