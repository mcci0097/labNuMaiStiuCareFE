import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import { UserService } from 'src/app/services/users.service';
let UsersComponent = class UsersComponent {
    constructor(rootService) {
        this.rootService = rootService;
        this.users = null;
        this.displayedColumns = ['id', 'username', 'email', 'userRole'];
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
};
UsersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.scss']
    })
], UsersComponent);
export { UsersComponent };
//# sourceMappingURL=users.component.js.map