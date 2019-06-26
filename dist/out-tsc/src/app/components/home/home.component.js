import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    home() {
        this.router.navigate(['']);
    }
    tasksManagement() {
        this.router.navigate(['/tasks']);
    }
    usersManagement() {
        this.router.navigate(['/users']);
        // console.log(result);
    }
    userRolesManagement() {
        this.router.navigate(['/userRoles']);
    }
    commentsManagement() {
        this.router.navigate(['/comments']);
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
        window.location.reload();
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map