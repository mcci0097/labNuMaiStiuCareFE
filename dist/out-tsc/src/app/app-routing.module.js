import * as tslib_1 from "tslib";
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { UserRolesComponent } from './components/users-role/users-role.component';
const routes = [
    { path: '', component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'tasks', component: TasksComponent },
            { path: 'users', component: UsersComponent },
            { path: 'userRoles', component: UserRolesComponent },
            { path: 'comments', component: CommentsComponent }
        ] },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map