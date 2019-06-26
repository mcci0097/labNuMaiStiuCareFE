import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserRolesComponent = class UserRolesComponent {
    constructor(rootService) {
        this.rootService = rootService;
        this.userRoles = null;
        this.displayedColumns = ['id', 'title'];
        this.getAllUserRoles();
    }
    ngOnInit() {
    }
    getAllUserRoles() {
        // this.users = []
        this.rootService.getAllUserRoles().subscribe(ur => {
            this.userRoles = ur;
            console.log(ur);
        });
    }
};
UserRolesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-users-role',
        templateUrl: './users-role.component.html',
        styleUrls: ['./users-role.component.scss']
    })
], UserRolesComponent);
export { UserRolesComponent };
//# sourceMappingURL=users-role.component.js.map