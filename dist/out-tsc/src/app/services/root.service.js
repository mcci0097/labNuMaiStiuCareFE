import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let RootService = class RootService {
    constructor(http) {
        this.http = http;
        // this.tasksSubject = new BehaviorSubject<any>(null);
    }
    getAllTasks(x) {
        x = x + 1;
        // const from = ;
        // const to = ;
        return this.http.get(`https://localhost:44348/api/Tasks?page=` + x);
        // return this.http.get<any>(`https://localhost:44348/api/Tasks/`)
        //     .pipe(map(response => {
        //         this.tasks = response;
        //         this.tasksSubject.next(this.tasks);
        //         return response;
        //     }));
    }
    getAllUsers() {
        return this.http.get(`https://localhost:44348/api/users`);
    }
    getAllUserRoles() {
        return this.http.get(`https://localhost:44348/api/userRoles`);
    }
    getAllFilterDate(startDate, endDate) {
        const startFormatted = startDate.toISOString;
        const endFormatted = endDate.toISOString;
        return this.http.get('https://localhost:44348/api/Tasks?from=' + startFormatted +
            '&to=' + endFormatted);
    }
};
RootService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], RootService);
export { RootService };
//# sourceMappingURL=root.service.js.map