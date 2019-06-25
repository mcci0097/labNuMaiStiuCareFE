import { Component, OnInit } from '@angular/core';
import { RootService } from 'src/app/services/root.service';
import { Router } from '@angular/router';

// import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  public users: any = null;
  public displayedColumns: string[] =
   ['id','username', 'email','userRole'];

  constructor(private rootService: RootService) {
     this.getAllUsers();
    }

  ngOnInit() {
  }

  getAllUsers() {
      // this.users = []
    
      this.rootService.getAllUsers().subscribe(u => {
        this.users = u;
        console.log(u);
      });
  
  }

}
