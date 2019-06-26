import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TasksComponent = class TasksComponent {
    constructor(rootService) {
        this.rootService = rootService;
        this.tasks = null;
        this.displayedColumns = ['title', 'description', 'added', 'deadline', 'numberOfComments', 'closedAt', 'importance', 'state'];
        this.getAllTasks(0);
    }
    ngOnInit() {
    }
    getAllTasks(x) {
        this.rootService.getAllTasks(x).subscribe(t => {
            this.tasks = t;
            console.log(t);
        });
    }
    getAllFilterDate(startDate, endDate) {
        this.rootService.getAllFilterDate(startDate, endDate).subscribe(t => {
            this.tasks = t;
            console.log(t);
        });
    }
    handlePage(e) {
        this.getAllTasks(e.pageIndex);
    }
};
TasksComponent = tslib_1.__decorate([
    Component({
        selector: 'app-tasks',
        templateUrl: './tasks.component.html',
        styleUrls: ['./tasks.component.scss']
    })
], TasksComponent);
export { TasksComponent };
//# sourceMappingURL=tasks.component.js.map