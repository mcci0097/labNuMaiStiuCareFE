import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RootService {
    // private tasksSubject: BehaviorSubject<any>;
    public tasks: any;
    public users: any;
    public userRole: any;


    constructor(private http: HttpClient) {
        // this.tasksSubject = new BehaviorSubject<any>(null);
    }

    getAllTasks() : Observable<any> {
        return this.http.get<any>(
            `https://localhost:44348/api/Tasks`);

        // return this.http.get<any>(`https://localhost:44348/api/Tasks/`)
        //     .pipe(map(response => {
        //         this.tasks = response;
        //         this.tasksSubject.next(this.tasks);
        //         return response;
        //     }));
    }

    getAllUsers() : Observable<any> {
        return this.http.get<any>(
            `https://localhost:44348/api/users`);

        // return this.http.get<any>(`https://localhost:44348/api/users`)
        //     .pipe(map(response => {
        //         this.users = response;
        //         this.usersSubject.next(this.users);
        //         return response;
        //     }));
    }

    
    getAllUserRoles() : Observable<any> {
        return this.http.get<any>(
            `https://localhost:44348/api/userRoles`);

        // return this.http.get<any>(`https://localhost:44348/api/users`)
        //     .pipe(map(response => {
        //         this.users = response;
        //         this.usersSubject.next(this.users);
        //         return response;
        //     }));
    }
}